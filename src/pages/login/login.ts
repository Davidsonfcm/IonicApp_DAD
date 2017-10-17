import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { NavController, AlertController } from "ionic-angular";
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
    authorized: boolean;
    errorMessage: string;
    buttonIsEnabled: boolean = false;

    constructor(private nav: NavController,
        private loginService: LoginService,
        private alertController: AlertController) {
    }

    signIn(): void {
        this.loginService.validateLogin(this.cpf, this.password)
            .subscribe(login => this.authorized = (login != null ? true : false),
            error => this.errorMessage = <any>error);

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
    
    handleCorrectCaptcha($event): void {
        if ($event != '') {
            this.buttonIsEnabled = true;
        }
    }

}

