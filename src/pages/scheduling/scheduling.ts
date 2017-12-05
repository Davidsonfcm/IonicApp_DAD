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
  disableDiagnostic : boolean = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalServices: GlobalService,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public usuarioService: UsuarioService,
    public schedulingService: SchedulingService) {
    this.usuarioCpf = this.globalServices.loginCpf;
    this.proprietario = this.globalServices.loginNome;

    if(this.navParams.get('id') !== undefined)
    {
      this.action = 'edit';
      this.schedulingService.search(this.navParams.get('id'))
      .subscribe((response : IResponseDTO)=> {
        this.identificador = response.Contents[0].identificador;
        this.usuarioCpf = response.Contents[0].usuarioCpf;
        this.data = response.Contents[0].data;
        this.animal = response.Contents[0].animal;
        this.diagnostico = response.Contents[0].diagnostico;

        this.usuarioService.search(response.Contents[0].usuarioCpf)
        .subscribe((response : IResponseDTO) => {
            this.proprietario = response.Contents.nome;
        });
        
      });
    }

    if (this.globalServices.loginTipo == 'Gestor' || this.globalServices.loginTipo == 'Master')
    {
      this.action = 'edit';
      this.disableScheduling = true;
      this.disableDiagnostic = false;
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
    if(this.action == 'edit')
    {
      this.schedulingService.edit(this.schedulingForm.value)
      .subscribe((result: IResponseDTO) => {
        this.responseData = result;
        this.message(result.Success, result.Message);
      });
    }
    else{
      this.schedulingService.register(this.schedulingForm.value)
      .subscribe((result: IResponseDTO) => {
        this.responseData = result;
        this.message(result.Success, result.Message);
      });
    }
  }

  //exibe o alerta para o cliente
  message(success: boolean, message: string): void {
    let alert = this.alertController.create({
      title: 'Mensagem',
      subTitle: success == true
        ? "Registrado com sucesso!"
        : message,
      buttons: [{
        text: 'Sim',
        handler: data => {
          if (success == true)
            this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }


}
