import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { IResponseDTO } from '../../contracts/IResponseDTO';
import { IScheduling } from '../../contracts/IScheduling';

import { GlobalService } from '../../providers/global.service';
import { SchedulingService } from '../../providers/scheduling.service';
import { UsuarioService } from '../../providers/usuario.service';

@Component({
  selector: 'page-scheduling',
  templateUrl: 'scheduling.html',
})
export class SchedulingPage implements IScheduling {
  identificador: number;
  usuarioCpf: string;
  animal: string;
  data: Date;
  diagnostico: string;
  proprietario: string;

  schedulingForm: any;
  responseData: IResponseDTO;
  action: string = 'register';

  disableScheduling : boolean = false;
  visibleDiagnostic : boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalServices: GlobalService,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public usuarioService: UsuarioService,
    public schedulingService: SchedulingService) {
    this.usuarioCpf = this.globalServices.loginCpf;
    this.proprietario = this.globalServices.loginNome;
debugger;
    if(this.navParams.get('id') !== undefined)
    {
      this.schedulingService.search(this.navParams.get('id').value)
      .subscribe((response : IResponseDTO)=> {
        this.identificador = response.Contents.identificador;
        this.usuarioCpf = response.Contents.usuarioCpf;
        this.data = response.Contents.data;
        this.animal = response.Contents.animal;
        this.diagnostico = response.Contents.diagnostico;
      });
    }

    if (this.globalServices.loginTipo == 'Gestor' || this.globalServices.loginTipo == 'Master')
    {
      this.action = 'edit';
      this.disableScheduling = true;
      this.visibleDiagnostic = true;
      this.usuarioService.search(this.usuarioCpf)
      .subscribe((response : IResponseDTO) => {
          this.proprietario = response.Contents.nome;
      });
    }

    

    this.schedulingForm = this.formBuilder.group({
      "identificador": [""],
      "usuarioCpf": ["", Validators.required],
      "data": ["", Validators.required],
      "animal": ["", Validators.required],
      "diagnostico": [""],
    });
  }

  //limpar o formulário
  cleanForm(): void {
    this.schedulingForm.reset()
  }

  //Salvar o formulário
  submit(): void {
      this.schedulingService.register(this.schedulingForm.value)
        .subscribe((result: IResponseDTO) => {
          this.responseData = result;
          this.message(result.Success, result.Message);
        });
  }

  //exibe o alerta para o cliente
  message(success: boolean, message: string): void {
    let alert = this.alertController.create({
      title: 'Mensagem',
      subTitle: success == true
        ? "Agendado com sucesso!"
        : message,
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


}
