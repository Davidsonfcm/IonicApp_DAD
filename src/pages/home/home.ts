import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario.service';
import { IResponseDTO } from '../../contracts/IResponseDTO';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName : string;

  constructor(public navCtrl: NavController,
    public navParams : NavParams,
    public usuarioService : UsuarioService) {
      let cpf = navParams.get("cpf");

      this.usuarioService.search(cpf)
      .subscribe((result: IResponseDTO) => {
        console.log(result);
          this.userName = result.Contents.nome;
      });
  }

}
