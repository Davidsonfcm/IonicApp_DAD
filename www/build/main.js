webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userRegister_userRegister__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, globalService, navParams, usuarioService) {
        this.navCtrl = navCtrl;
        this.globalService = globalService;
        this.navParams = navParams;
        this.usuarioService = usuarioService;
        this.userName = this.globalService.loginNome;
    }
    HomePage.prototype.openPage = function (page) {
        switch (page) {
            case 'UserRegisterPage':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__userRegister_userRegister__["a" /* UserRegisterPage */], { cpf: this.globalService.loginCpf });
                break;
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Inicio</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-fab top right edge (click)="openPage(\'UserRegisterPage\');">\n\n    <button ion-fab mini>\n\n      <ion-icon name="contact"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <h3>Sistema Básico de Gestão</h3>\n\n\n\n  <p>\n\n    <b>{{userName}}</b> ,Seja Bem Vindo ao sistema básico de gestão, através deste aplicativo você tera acessos a todos os recursos\n\n    na palma de sua mão.\n\n    <br/>\n\n    <br/> Em caso de dúvidas envie uma mensagem para testedad39@gmail.com.\n\n  </p>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_global_service__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_usuario_service__["a" /* UsuarioService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_scheduling_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchedulingPage = (function () {
    function SchedulingPage(navCtrl, navParams, globalServices, formBuilder, alertController, usuarioService, schedulingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalServices = globalServices;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.usuarioService = usuarioService;
        this.schedulingService = schedulingService;
        this.action = 'register';
        this.disableScheduling = false;
        this.visibleDiagnostic = false;
        this.usuarioCpf = this.globalServices.loginCpf;
        this.proprietario = this.globalServices.loginNome;
        debugger;
        if (this.navParams.get('id') !== undefined) {
            this.schedulingService.search(this.navParams.get('id').value)
                .subscribe(function (response) {
                _this.identificador = response.Contents.identificador;
                _this.usuarioCpf = response.Contents.usuarioCpf;
                _this.data = response.Contents.data;
                _this.animal = response.Contents.animal;
                _this.diagnostico = response.Contents.diagnostico;
            });
        }
        if (this.globalServices.loginTipo == 'Gestor' || this.globalServices.loginTipo == 'Master') {
            this.action = 'edit';
            this.disableScheduling = true;
            this.visibleDiagnostic = true;
            this.usuarioService.search(this.usuarioCpf)
                .subscribe(function (response) {
                _this.proprietario = response.Contents.nome;
            });
        }
        this.schedulingForm = this.formBuilder.group({
            "identificador": [""],
            "usuarioCpf": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "data": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "animal": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "diagnostico": [""],
        });
    }
    //limpar o formulário
    SchedulingPage.prototype.cleanForm = function () {
        this.schedulingForm.reset();
    };
    //Salvar o formulário
    SchedulingPage.prototype.submit = function () {
        var _this = this;
        this.schedulingService.register(this.schedulingForm.value)
            .subscribe(function (result) {
            _this.responseData = result;
            _this.message(result.Success, result.Message);
        });
    };
    //exibe o alerta para o cliente
    SchedulingPage.prototype.message = function (success, message) {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Mensagem',
            subTitle: success == true
                ? "Agendado com sucesso!"
                : message,
            buttons: [{
                    text: 'Yes',
                    handler: function (data) {
                        if (success == true)
                            _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    return SchedulingPage;
}());
SchedulingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-scheduling',template:/*ion-inline-start:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\scheduling\scheduling.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Agendamento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="schedulingForm" (ngSubmit)="submit();">\n\n    <ion-input type="hidden" formControlName="identificador" [(ngModel)]="identificador" value="0"></ion-input>\n    <ion-input type="hidden" formControlName="usuarioCpf" [(ngModel)]="usuarioCpf"></ion-input>\n\n    <ion-list>\n\n      <ion-item>\n            <ion-label> Proprietário: {{proprietario}} </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Animal</ion-label>\n        <ion-input type="text" [disabled]="disableScheduling"\n          formControlName="animal" [(ngModel)]="animal"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Data</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY HH:MM" [disabled]="disableScheduling"\n          formControlName="data" min="2017" max="2019-01-01" [(ngModel)]="data"></ion-datetime>\n      </ion-item>\n\n      <ion-item *ngIf="visibleDiagnostic">\n        <ion-label floating>Diagnóstico</ion-label>\n        <ion-input type="text"\n        formControlName="diagnostico" [(ngModel)]="diagnostico"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button full default type="submit" [disabled]="!schedulingForm.valid">Salvar</button>        \n        <button ion-button full default (click)="cleanForm()">Limpar</button>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\scheduling\scheduling.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_global_service__["a" /* GlobalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__["a" /* UsuarioService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_scheduling_service__["a" /* SchedulingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_scheduling_service__["a" /* SchedulingService */]) === "function" && _g || Object])
], SchedulingPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=scheduling.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SchedulingService = (function () {
    function SchedulingService(_http) {
        this._http = _http;
        this._loginUrl = "http://www.dad.com.br/Api/V1/Consulta";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        this._options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    //Cadastra usuario
    SchedulingService.prototype.register = function (agendamento) {
        return this._http.post(this._loginUrl + '/Agendar', JSON.stringify(agendamento), this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //busca o usuario pelo cpf
    SchedulingService.prototype.searchAll = function () {
        return this._http.get(this._loginUrl + '/Todos', this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //busca o usuario pelo cpf
    SchedulingService.prototype.search = function (identificador) {
        return this._http.get(this._loginUrl + '/FiltrarId/' + identificador, this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
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
    SchedulingService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return SchedulingService;
}());
SchedulingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SchedulingService);

//# sourceMappingURL=scheduling.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userRegister_userRegister__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(nav, globalService, usuarioService, alertController, menuController) {
        this.nav = nav;
        this.globalService = globalService;
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.menuController = menuController;
        this.buttonIsEnabled = false;
        this.menuController.swipeEnable(false);
    }
    //Efetua o login na página e válida
    LoginPage.prototype.signIn = function () {
        var _this = this;
        //Mostra a imagem de carregamento
        this.globalService.presentLoading();
        this.usuarioService.validateLogin(this.cpf, this.password)
            .subscribe(function (result) {
            _this.responseData = result;
            console.log(result);
            _this.validateResponse();
        });
    };
    //Cria as variaveis globais e chama a pagina home
    LoginPage.prototype.validateResponse = function () {
        if (this.responseData.Success == true) {
            this.globalService.loginCpf = this.cpf;
            this.globalService.loginNome = this.responseData.Contents.nome;
            this.globalService.loginTipo = this.responseData.Contents.tipo;
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { cpf: this.cpf });
        }
        else {
            var alert_1 = this.alertController.create({
                title: 'Alerta',
                subTitle: this.responseData.Message,
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    LoginPage.prototype.pushPage = function (page) {
        switch (page) {
            case 'register':
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__userRegister_userRegister__["a" /* UserRegisterPage */], { tipo: "Associado" });
                break;
            case 'remember':
                break;
        }
    };
    //Exibe recurso de lembrar senha
    LoginPage.prototype.rememberPassword = function () {
        var _this = this;
        var prompt = this.alertController.create({
            title: 'Lembrar senha',
            message: "Entre com seu cpf e lhe enviaremos sua senha por email",
            inputs: [
                {
                    name: 'cpf',
                    placeholder: 'cpf'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) { }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        _this.usuarioService.rememberPassword(data.cpf)
                            .subscribe(function (result) {
                            _this.responseData = result;
                            var alert = _this.alertController.create({
                                title: 'Alerta',
                                subTitle: _this.responseData.Message,
                                buttons: ['OK']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    //Efetua ações em caso de erro no captcha
    LoginPage.prototype.handleCorrectCaptcha = function ($event) {
        if ($event != '') {
            this.buttonIsEnabled = true;
        }
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__["ReCaptchaComponent"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__["ReCaptchaComponent"])
], LoginPage.prototype, "captcha", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\login\login.html"*/'<ion-content class="vertical-align-content">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-10>\n\n                <ion-item>\n\n                    <ion-input placeholder="CPF" [(ngModel)]="cpf"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n                <ion-icon name="person"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-10>\n\n                <ion-item>\n\n                    <ion-input type="password" placeholder="Senha" [(ngModel)]="password"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n                <ion-icon name="lock"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <re-captcha (captchaResponse)="handleCorrectCaptcha($event)" site_key="6LckFDMUAAAAAH28cebkT3kbyGWgLmez06Q_d1HF"></re-captcha>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <button ion-button full color="dark" (click)=\'signIn();\' [disabled]="!buttonIsEnabled">\n\n                    Entrar\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <a href="#" class="registrationLink" (click)="pushPage(\'register\');">Cadastre-se</a>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <a href="#" class="rememberUser" (click)="rememberPassword();">Esqueci minha senha!</a>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\login\login.html"*/,
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__userRegister_userRegister__["a" /* UserRegisterPage */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_global_service__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__["a" /* UsuarioService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_scheduling_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scheduling_scheduling__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CallPage = (function () {
    function CallPage(alertController, navCtrl, navParams, globalServices, scheduleService, usuarioService) {
        var _this = this;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalServices = globalServices;
        this.scheduleService = scheduleService;
        this.usuarioService = usuarioService;
        this.calls = [];
        this.scheduleService.searchAll()
            .subscribe(function (response) {
            if (response.Contents.length == 0)
                _this.message(true, 'Não há consultas pendentes');
            for (var i = 0; i < response.Contents.length; i++) {
                _this.calls.push({
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
    CallPage.prototype.message = function (success, message) {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Mensagem',
            subTitle: message,
            buttons: [{
                    text: 'Yes',
                    handler: function (data) {
                        if (success == true)
                            _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    CallPage.prototype.openConsult = function (identificador) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scheduling_scheduling__["a" /* SchedulingPage */], { id: identificador });
    };
    return CallPage;
}());
CallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-call',template:/*ion-inline-start:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\call\call.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Consultas Pendentes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let call of calls">\n      <h2>{{call.proprietario}}</h2>({{call.animal}})\n      <p>{{call.data}}</p>\n      <button ion-button clear item-end (click)="openConsult(call.identificador)"> Atender </button>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\call\call.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_global_service__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_scheduling_service__["a" /* SchedulingService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__["a" /* UsuarioService */]])
], CallPage);

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_userRegister_userRegister__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_scheduling_scheduling__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_call_call__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_usuario_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_global_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_scheduling_service__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* TrabalhoSDApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_userRegister_userRegister__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_scheduling_scheduling__["a" /* SchedulingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_call_call__["a" /* CallPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* TrabalhoSDApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha__["ReCaptchaModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* TrabalhoSDApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_userRegister_userRegister__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_scheduling_scheduling__["a" /* SchedulingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_call_call__["a" /* CallPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_14__providers_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_scheduling_service__["a" /* SchedulingService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabalhoSDApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_scheduling_scheduling__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_userRegister_userRegister__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_call_call__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TrabalhoSDApp = (function () {
    function TrabalhoSDApp(platform, statusBar, splashScreen, globalService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.globalService = globalService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], userTypeAuthorized: 'Associado|Gestor|Master' },
            { title: 'Agendamento', component: __WEBPACK_IMPORTED_MODULE_6__pages_scheduling_scheduling__["a" /* SchedulingPage */], userTypeAuthorized: 'Associado' },
            { title: 'Antedimentos', component: __WEBPACK_IMPORTED_MODULE_8__pages_call_call__["a" /* CallPage */], userTypeAuthorized: 'Gestor|Associado|Master' },
            { title: 'Cadastro Gestor', component: __WEBPACK_IMPORTED_MODULE_7__pages_userRegister_userRegister__["a" /* UserRegisterPage */], userTypeAuthorized: 'Master' },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], userTypeAuthorized: 'Associado|Gestor|Master' }
        ];
    }
    TrabalhoSDApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    //Verifica se o aluno está autorizado a ver o menu
    TrabalhoSDApp.prototype.getMenuAuthorized = function () {
        var menu = new Array();
        if (this.globalService.loginCpf != "") {
            for (var i = 0; i < this.pages.length; i++) {
                var arrayPermissions = this.pages[i].userTypeAuthorized.split('|');
                for (var j = 0; j < arrayPermissions.length; j++) {
                    if (arrayPermissions[j] == this.globalService.loginTipo)
                        menu.push(this.pages[i]);
                }
            }
        }
        return menu;
    };
    TrabalhoSDApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == 'Sair') {
            this.globalService.loginCpf = "";
            this.globalService.loginNome = "";
            this.globalService.loginTipo = "";
        }
        this.nav.push(page.component);
    };
    return TrabalhoSDApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], TrabalhoSDApp.prototype, "nav", void 0);
TrabalhoSDApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of getMenuAuthorized()" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_9__providers_global_service__["a" /* GlobalService */]])
], TrabalhoSDApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = (function () {
    function GlobalService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.loginCpf = "";
        this.loginNome = "";
        this.loginTipo = "";
    }
    GlobalService.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
            duration: 3000
        });
        loader.present();
    };
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */]])
], GlobalService);

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsuarioService = (function () {
    function UsuarioService(_http) {
        this._http = _http;
        this._loginUrl = "http://www.dad.com.br/Api/V1/Usuario";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        this._options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    //valida o login do usuário
    UsuarioService.prototype.validateLogin = function (_cpf, _password) {
        var body = {
            cpf: _cpf,
            senha: _password
        };
        return this._http.post(this._loginUrl + '/Autenticar', JSON.stringify(body), this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Cadastra usuario
    UsuarioService.prototype.register = function (usuario) {
        return this._http.post(this._loginUrl + '/Registrar', JSON.stringify(usuario), this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //edita usuario
    UsuarioService.prototype.edit = function (usuario) {
        return this._http.put(this._loginUrl + '/Editar/' + usuario.cpf, JSON.stringify(usuario), this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //busca o usuario pelo cpf
    UsuarioService.prototype.search = function (cpf) {
        return this._http.get(this._loginUrl + '/Filtrar/' + cpf, this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Executa o envio de email da senha
    UsuarioService.prototype.rememberPassword = function (cpf) {
        return this._http.get(this._loginUrl + '/LembrarSenha/' + cpf, this._options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //apresenta um erro caso houver
    UsuarioService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UsuarioService);

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegisterPage = (function () {
    function UserRegisterPage(nav, globalService, navParams, formBuilder, usuarioService, alertController, menuController) {
        this.nav = nav;
        this.globalService = globalService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.menuController = menuController;
        this.cpf = "";
        this.action = 'register';
        this.menuController.swipeEnable(false);
        this.tipo = this.navParams.get("tipo");
        if (this.navParams.get("cpf") !== undefined) {
            this.cpf = this.navParams.get("cpf");
            this.action = 'edit';
            this.getUser(this.cpf);
        }
        this.registerForm = this.formBuilder.group({
            "cpf": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "nome": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "senha": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "tipo": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    //limpar o formulário
    UserRegisterPage.prototype.clean = function () {
        this.registerForm.reset();
    };
    //Salvar o formulário
    UserRegisterPage.prototype.submit = function () {
        var _this = this;
        if (this.action == 'edit') {
            this.usuarioService.edit(this.registerForm.value)
                .subscribe(function (result) {
                _this.responseData = result;
                _this.message(result.Success, result.Message);
            });
        }
        else {
            this.usuarioService.register(this.registerForm.value)
                .subscribe(function (result) {
                _this.responseData = result;
                _this.message(result.Success, result.Message);
            });
        }
    };
    //Busca usuario pelo cpf
    UserRegisterPage.prototype.getUser = function (cpf) {
        var _this = this;
        this.usuarioService.search(cpf)
            .subscribe(function (result) {
            _this.responseData = result;
            _this.cpf = _this.responseData.Contents.cpf;
            _this.nome = _this.responseData.Contents.nome;
            _this.email = _this.responseData.Contents.email;
            _this.senha = _this.responseData.Contents.senha;
            _this.tipo = _this.responseData.Contents.tipo;
        });
    };
    //exibe o alerta para o cliente
    UserRegisterPage.prototype.message = function (success, message) {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Mensagem',
            subTitle: success == true
                ? "Registrado com sucesso!"
                : message,
            buttons: [{
                    text: 'Yes',
                    handler: function (data) {
                        if (success == true)
                            _this.nav.pop();
                    }
                }]
        });
        alert.present();
    };
    return UserRegisterPage;
}());
UserRegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-userRegister',template:/*ion-inline-start:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\userRegister\userRegister.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Cadastro</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="registerForm" (ngSubmit)="submit();">\n\n\n\n    <ion-input type="hidden" formControlName="tipo" [(ngModel)]="tipo"></ion-input>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>CPF</ion-label>\n\n        <ion-input type="text" formControlName="cpf" [(ngModel)]="cpf"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nome</ion-label>\n\n        <ion-input type="text" value="" formControlName="nome" [(ngModel)]="nome"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" formControlName="email" [(ngModel)]="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Senha</ion-label>\n\n        <ion-input type="password" formControlName="senha" [(ngModel)]="senha"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <button ion-button full default type="submit" [disabled]="!registerForm.valid">Salvar</button>\n\n        <button ion-button full default (click)="clean()">Limpar</button>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Davidson\dev\GIT\IonicApp_DAD\src\pages\userRegister\userRegister.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_global_service__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service__["a" /* UsuarioService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], UserRegisterPage);

//# sourceMappingURL=userRegister.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map