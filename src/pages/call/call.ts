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

  constructor(public alertController: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public globalServices: GlobalService,
    public scheduleService: SchedulingService,
    public usuarioService: UsuarioService) {

      this.scheduleService.searchAll()
      .subscribe((response : IResponseDTO) => {

        if(response.Contents.length == 0)
          this.message(true, 'Não há consultas pendentes');
      
        for(var i =0; i < response.Contents.length; i++)
        {
          this.calls.push({
            identificador: response.Contents[i].identificador,
            data: response.Contents[i].data,
            animal: response.Contents[i].animal,
            diagnostico: response.Contents[i].diagnostico,
            usuarioCpf: response.Contents[i].usuarioCpf,
            proprietario: response.Contents[i].proprietario
          });
        }  
      });
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

  openConsult(identificador : number) : void
  {
    this.navCtrl.push(SchedulingPage, { id : identificador})
  }

}
