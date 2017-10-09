import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { ILogin } from "./ILogin";

@Injectable()
export class LoginService {

    private _loginUrl: string = "http://localhost:8100/data/login.json";

    constructor(private _http: Http) {
    }

    validateLogin(_user: string, _password: string): Observable<ILogin> {
        return this._http.get(this._loginUrl)        
        .map((response: Response)  => <ILogin>response.json()
        .filter(<ILogin>(x) => x.user == _user && x.password == _password))
        .do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}