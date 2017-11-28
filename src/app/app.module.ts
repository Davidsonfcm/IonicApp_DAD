import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReCaptchaModule } from 'angular2-recaptcha';

import { HttpModule } from '@angular/http';
import { TrabalhoSDApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserRegisterPage } from '../pages/userRegister/userRegister';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioService } from '../providers/usuario.service';



@NgModule({
  declarations: [
    TrabalhoSDApp,
    LoginPage,
    HomePage,
    ListPage,
    UserRegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TrabalhoSDApp),
    ReCaptchaModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TrabalhoSDApp,
    LoginPage,
    HomePage,
    ListPage,
    UserRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioService
  ]
})
export class AppModule {}
