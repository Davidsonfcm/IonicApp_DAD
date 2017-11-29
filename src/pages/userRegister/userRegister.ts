import { Component } from '@angular/core';
import { NavController, AlertController, MenuController, NavParams } from "ionic-angular";
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { IResponseDTO } from '../../contracts/IResponseDTO';
import { IUsuario } from '../../contracts/IUsuario';

import { UsuarioService } from '../../providers/usuario.service';
import { GlobalService } from '../../providers/global.service';

@Component({
    selector: 'page-userRegister',
    templateUrl: 'userRegister.html',
})
export class UserRegisterPage implements IUsuario {
    cpf: string = "";
    nome: string;
    email: string;
    senha: string;
    tipo: string;

    registerForm: any;
    responseData: IResponseDTO;
    action: string = 'register';

    constructor(private nav: NavController,
        public globalService : GlobalService,
        public navParams: NavParams,
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private alertController: AlertController,
        private menuController: MenuController) {
        this.menuController.swipeEnable(false);
        this.tipo = this.navParams.get("tipo");

        if (this.navParams.get("cpf") !== undefined) {
            this.cpf = this.navParams.get("cpf");
            this.action = 'edit';
            this.getUser(this.cpf);
        }

        this.registerForm = this.formBuilder.group({
            "cpf": ["", Validators.required],
            "nome": ["", Validators.required],
            "email": ["", Validators.required],
            "senha": ["", Validators.required],
            "tipo": ["", Validators.required]
        });
    }

    //limpar o formulário
    clean(): void {
        this.registerForm.reset()
    }

    //Salvar o formulário
    submit(): void {
        if (this.action == 'edit') {
            this.usuarioService.edit(this.registerForm.value)
                .subscribe((result: IResponseDTO) => {
                    this.responseData = result;
                    this.message(result.Success, result.Message);
                });
        }
        else {
            this.usuarioService.register(this.registerForm.value)
                .subscribe((result: IResponseDTO) => {
                    this.responseData = result;
                    this.message(result.Success, result.Message);
                });
        }
    }

    //Busca usuario pelo cpf
    getUser(cpf: string): void {
        this.usuarioService.search(cpf)
            .subscribe((result: IResponseDTO) => {
                this.responseData = result;
                this.cpf = this.responseData.Contents.cpf;
                this.nome = this.responseData.Contents.nome;
                this.email = this.responseData.Contents.email;
                this.senha = this.responseData.Contents.senha;
                this.tipo = this.responseData.Contents.tipo;
            });
    }

    //exibe o alerta para o cliente
    message(success: boolean, message: string): void {
        let alert = this.alertController.create({
            title: 'Mensagem',
            subTitle: success == true
                ? "Registrado com sucesso!"
                : message,
            buttons: [{
                text: 'Yes',
                handler: data => {
                    if (success == true)
                        this.nav.pop();
                }
            }]
        });
        alert.present();
    }

}

