import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { IResponseDTO } from "../contracts/IResponseDTO";
import { IUsuario } from "../contracts/IUsuario";

@Injectable()
export class UsuarioService {

    private _loginUrl: string = "http://www.dad.com.br/Api/V1/Usuario";
    private _options: RequestOptions;

    constructor(private _http: Http) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        this._options = new RequestOptions({ headers: headers });
    }

    //valida o login do usuário
    validateLogin(_cpf: string, _password: string): Observable<IResponseDTO> {
        let body = {
            cpf : _cpf,
            senha : _password  
        };

        return this._http.post(this._loginUrl+'/Autenticar', JSON.stringify(body), this._options)      
        .map((response: Response)=> response.json())
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    //Cadastra usuario
    register(usuario: IUsuario): Observable<IResponseDTO> {
        return this._http.post(this._loginUrl+'/Registrar', JSON.stringify(usuario), this._options)      
            .map((response: Response)=> response.json())
            .catch(this.handleError);
    }

    //edita usuario
    edit(usuario: IUsuario): Observable<IResponseDTO> {
        console.log(usuario);
        return this._http.put(this._loginUrl +'/Editar' , JSON.stringify(usuario), this._options)      
            .map((response: Response)=> response.json())
            .catch(this.handleError);
    }

    //busca o usuario pelo cpf
    search(cpf: string) : Observable<IResponseDTO> {
        return this._http.get(this._loginUrl + '/Filtrar/' + cpf, this._options)      
        .map((response: Response)=> response.json())
        .catch(this.handleError);
    }

    //Executa o envio de email da senha
    rememberPassword(cpf: string) : Observable<IResponseDTO> {
        return this._http.get(this._loginUrl + '/LembrarSenha/' + cpf, this._options)      
        .map((response: Response)=> response.json())
        .catch(this.handleError);
    }

    //apresenta um erro caso houver
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}