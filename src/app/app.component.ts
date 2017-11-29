import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IPagesMenu } from '../contracts/IPagesMenu';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";

import { GlobalService } from '../providers/global.service';

@Component({
  templateUrl: 'app.html'
})
export class TrabalhoSDApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<IPagesMenu>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public globalService: GlobalService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, userTypeAuthorized: 'Associado|Gestor|Master' },
      { title: 'Agenda', component: ListPage, userTypeAuthorized: 'Associado|Gestor|Master' },
      { title: 'Diagnósticos', component: ListPage, userTypeAuthorized: 'Gestor|Master' },
      { title: 'Consultas', component: ListPage, userTypeAuthorized: 'Gestor|Associado|Master' },
      { title: 'Cadastro Gestor', component: ListPage, userTypeAuthorized: 'Master' },
      { title: 'Sair', component: LoginPage, userTypeAuthorized: 'Associado|Gestor|Master' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //Verifica se o aluno está autorizado a ver o menu
  getMenuAuthorized() : Array<IPagesMenu> {
    let menu = new Array<IPagesMenu>();

    if(this.globalService.loginCpf != "")
    {
      for(var i = 0 ; i < this.pages.length; i++) 
      {
        var arrayPermissions = this.pages[i].userTypeAuthorized.split('|');
        for (var j = 0; j < arrayPermissions.length; j++) {
          if (arrayPermissions[j] == this.globalService.loginTipo)
            menu.push(this.pages[i]);
        }
      }
    }
    return menu;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == 'Sair') {
      this.globalService.loginCpf = "";
      this.globalService.loginNome = "";
      this.globalService.loginTipo = "";
    }

    this.nav.setRoot(page.component);
  }
}
