import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario.service';
import { IResponseDTO } from '../../contracts/IResponseDTO';
import { UserRegisterPage } from '../userRegister/userRegister';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cpf : string;
  userName : string;

  constructor(public navCtrl: NavController,
    public navParams : NavParams,
    public usuarioService : UsuarioService) {
      this.cpf = navParams.get("cpf");

      this.usuarioService.search(this.cpf)
      .subscribe((result: IResponseDTO) => {
        console.log(result);
          this.userName = result.Contents.nome;
      });
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
