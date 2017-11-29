import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario.service';
import { IResponseDTO } from '../../contracts/IResponseDTO';
import { UserRegisterPage } from '../userRegister/userRegister';
import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName : string;

  constructor(public navCtrl: NavController,
    public globalService: GlobalService,
    public navParams : NavParams,
    public usuarioService : UsuarioService) {
      this.userName = this.globalService.loginNome;
  }

  openPage(page: string): void
  {
    switch(page)
    {
      case 'UserRegisterPage':
        this.navCtrl.push(UserRegisterPage, { cpf : this.cpf });
        break;
    }
  }

}
