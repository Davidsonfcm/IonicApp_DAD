import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { IResponseDTO } from '../../contracts/IResponseDTO';
import { ICall } from '../../contracts/ICall';

import { GlobalService } from '../../providers/global.service';
import { SchedulingService } from '../../providers/scheduling.service';
import { UsuarioService } from '../../providers/usuario.service';
import { SchedulingPage } from '../scheduling/scheduling';

@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {
  calls: ICall[] = [];
  labelLink : string;

  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public globalServices: GlobalService,
    public scheduleService: SchedulingService,
    public usuarioService: UsuarioService) {

    if (this.globalServices.loginTipo == 'Gestor' || this.globalServices.loginTipo == 'Master') {

      this.labelLink = 'Atender';
      this.scheduleService.searchAll()
      .subscribe((response: IResponseDTO) => {

        if (response.Contents.length == 0)
          this.message(true, 'Não há consultas pendentes');

        this.amountList(response.Contents);
      });
    }
    else{
      this.labelLink = 'Detalhes';
      this.scheduleService.searchByUser(this.globalServices.loginCpf)
      .subscribe((response: IResponseDTO) => {

        if (response.Contents.length == 0)
          this.message(true, 'Não há consultas pendentes');

        this.amountList(response.Contents);
      });
    }
    
  }


  amountList(calls: any[]): void {
    for (var i = 0; i < calls.length; i++) {
      this.calls.push({
        identificador: calls[i].identificador,
        data: calls[i].data,
        animal: calls[i].animal,
        diagnostico: calls[i].diagnostico,
        usuarioCpf: calls[i].usuarioCpf,
        proprietario: calls[i].proprietario
      });
    }
  }

  //exibe o alerta para o cliente
  message(success: boolean, message: string): void {
    let alert = this.alertController.create({
      title: 'Mensagem',
      subTitle: message,
      buttons: [{
        text: 'Yes',
        handler: data => {
          if (success == true)
            this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

  openConsult(identificador: number): void {
    this.navCtrl.push(SchedulingPage, { id: identificador })
  }

}
