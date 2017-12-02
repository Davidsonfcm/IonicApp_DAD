import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { IResponseDTO } from "../contracts/IResponseDTO";
import { IScheduling } from "../contracts/IScheduling";

@Injectable()
export class SchedulingService {

    private _loginUrl: string = "http://www.dad.com.br/Api/V1/Consulta";
    private _options: RequestOptions;

    constructor(private _http: Http) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        this._options = new RequestOptions({ headers: headers });
    }

    //Cadastra usuario
    register(agendamento : IScheduling): Observable<IResponseDTO> {
        return this._http.post(this._loginUrl+'/Agendar', JSON.stringify(agendamento), this._options)      
            .map((response: Response)=> response.json())
            .catch(this.handleError);
    }

    //busca o usuario pelo cpf
    searchAll() : Observable<IResponseDTO> {
        return this._http.get(this._loginUrl + '/Todos' , this._options)      
        .map((response: Response)=> response.json())
        .catch(this.handleError);
    }

     //busca o usuario pelo cpf
    search(identificador: number) : Observable<IResponseDTO> {
        return this._http.get(this._loginUrl + '/FiltrarId/' + identificador, this._options)      
        .map((response: Response)=> response.json())
        .catch(this.handleError);
    }

    // //edita usuario
    // edit(usuario: IScheduling): Observable<IResponseDTO> {
    //     return this._http.put(this._loginUrl +'/Editar/' + usuario.cpf , JSON.stringify(usuario), this._options)      
    //         .map((response: Response)=> response.json())
    //         .catch(this.handleError);
    // }

    // //busca o usuario pelo cpf
    // search(cpf: string) : Observable<IResponseDTO> {
    //     return this._http.get(this._loginUrl + '/Filtrar/' + cpf, this._options)      
    //     .map((response: Response)=> response.json())
    //     .catch(this.handleError);
    // }

    // //Executa o envio de email da senha
    // rememberPassword(cpf: string) : Observable<IResponseDTO> {
    //     return this._http.get(this._loginUrl + '/LembrarSenha/' + cpf, this._options)      
    //     .map((response: Response)=> response.json())
    //     .catch(this.handleError);
    // }

    //apresenta um erro caso houver
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}