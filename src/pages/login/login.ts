import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { NavController, AlertController, MenuController } from "ionic-angular";
import { HomePage } from "../home/home";
import { LoginService } from "./login.service";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

    cpf: string;
    user: string;
    password: string;
    userType: string;
    authorized: boolean;
    errorMessage: string;
    buttonIsEnabled: boolean = false;

    constructor(private nav: NavController,
        private loginService: LoginService,
        private alertController: AlertController,
        private menuController: MenuController) {
            this.menuController.swipeEnable(false);
    }

    //efetua o login na página e válida
    signIn(): void {
        console.log(this.userType);
        this.loginService.validateLogin(this.cpf, this.password, this.userType)
            .subscribe(
                login => this.authorized = (login != null ? true : false),
                error => this.errorMessage = <any>error,
                () =>  this.callPage());
    }
    
    //Chama a pagina home
    callPage() : void {
        if (this.authorized) {
            this.nav.setRoot(HomePage);
        }
        else {
            let alert = this.alertController.create({
                title: 'Alerta',
                subTitle: 'Usuário ou senha inválido!',
                buttons: ['OK']
            });
            alert.present();
        }
    }
    
    //Efetua ações em caso de erro no captcha
    handleCorrectCaptcha($event): void {
        if ($event != '') {
            this.buttonIsEnabled = true;
        }
    }

}

