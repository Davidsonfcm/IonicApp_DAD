import { LoadingController } from 'ionic-angular';
import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
    
    constructor(public loadingCtrl: LoadingController){
    }

    public loginCpf : string = "";
    public loginNome : string = "";
    public loginTipo : string = "";

    presentLoading() {
        let loader = this.loadingCtrl.create({
          content: "Por favor aguarde...",
          duration: 3000
        });
        loader.present();
      }
}