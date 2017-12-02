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
import { SchedulingPage } from '../pages/scheduling/scheduling';
import { CallPage } from '../pages/call/call';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsuarioService } from '../providers/usuario.service';
import { GlobalService } from '../providers/global.service';
import { SchedulingService } from '../providers/scheduling.service';

@NgModule({
  declarations: [
    TrabalhoSDApp,
    LoginPage,
    HomePage,
    ListPage,
    UserRegisterPage,
    SchedulingPage,
    CallPage
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
    UserRegisterPage,
    SchedulingPage,
    CallPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalService,
    UsuarioService,
    SchedulingService
  ]
})
export class AppModule {}
