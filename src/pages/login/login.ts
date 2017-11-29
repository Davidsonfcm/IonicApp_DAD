import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { NavController, AlertController, MenuController } from "ionic-angular";

import { IResponseDTO } from '../../contracts/IResponseDTO';

import { UserRegisterPage } from '../userRegister/userRegister';
import { HomePage } from "../home/home";

import { UsuarioService } from '../../providers/usuario.service';
import { GlobalService } from '../../providers/global.service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    entryComponents: [UserRegisterPage]
})
export class LoginPage {
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

    responseData: IResponseDTO;
    cpf: string;
    password: string;
    buttonIsEnabled: boolean = false;

    constructor(public nav: NavController,
        public globalService : GlobalService,
        public usuarioService: UsuarioService,
        public alertController: AlertController,
        public menuController: MenuController) {
        this.menuController.swipeEnable(false);
    }

    //Efetua o login na página e válida
    signIn(): void {
        //Mostra a imagem de carregamento
        this.globalService.presentLoading();

        this.usuarioService.validateLogin(this.cpf, this.password)
            .subscribe((result: IResponseDTO) => {
                this.responseData = result;
                console.log(result);
                this.validateResponse();
            });
    }

    //Cria as variaveis globais e chama a pagina home
    validateResponse(): void {
        if (this.responseData.Success == true) {
            this.globalService.loginCpf = this.cpf;
            this.globalService.loginNome = this.responseData.Contents.nome;
            this.globalService.loginTipo = this.responseData.Contents.tipo;

            this.nav.setRoot(HomePage, { cpf: this.cpf });
        }
        else {
            let alert = this.alertController.create({
                title: 'Alerta',
                subTitle: this.responseData.Message,
                buttons: ['OK']
            });
            alert.present();
        }
    }

    pushPage(page: string) {
        switch (page) {
            case 'register':
                this.nav.push(UserRegisterPage, { tipo: "Associado" });
                break;
            case 'remember':
                break;
        }
    }

    //Exibe recurso de lembrar senha
    rememberPassword(): void {
        let prompt = this.alertController.create({
            title: 'Lembrar senha',
            message: "Entre com seu cpf e lhe enviaremos sua senha por email",
            inputs: [
                {
                    name: 'cpf',
                    placeholder: 'cpf'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => { }
                },
                {
                    text: 'Enviar',
                    handler: data => {
                        this.usuarioService.rememberPassword(data.cpf)
                            .subscribe((result: IResponseDTO) => {
                                this.responseData = result;
                                let alert = this.alertController.create({
                                    title: 'Alerta',
                                    subTitle: this.responseData.Message,
                                    buttons: ['OK']
                                });
                                alert.present();
                            });
                    }
                }
            ]
        });
        prompt.present();
    }

    //Efetua ações em caso de erro no captcha
    handleCorrectCaptcha($event): void {
        if ($event != '') {
            this.buttonIsEnabled = true;
        }
    }

}

