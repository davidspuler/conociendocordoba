"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = 'http://127.0.0.1:8000/api/v1/productos/';
        this.carrito = [];
    }
    ApiService.prototype.getProducts = function () {
        return this.http.get(this.apiUrl);
    };
    ApiService.prototype.addToCart = function (producto) {
        this.carrito.push(producto);
    };
    ApiService.prototype.getCart = function () {
        return this.carrito;
    };
    ApiService.prototype.clearCart = function () {
        this.carrito = [];
    };
    ApiService.prototype.simularCompra = function (productoId, cantidad) {
        console.log('Valor de cantidad:', cantidad);
        var url = "http://127.0.0.1:8000/api/v1/simular/" + productoId + "/" + cantidad + "/";
        var data = {}; // Si es necesario, puedes enviar datos adicionales en el cuerpo de la solicitud
        return this.http.post(url, data);
    };
    ApiService.prototype.createUsuario = function (Nombre, Apellido, FechaNacimiento, CorreoElectronico, password) {
        var datos = {
            Nombre: Nombre, Apellido: Apellido, FechaNacimiento: FechaNacimiento,
            CorreoElectronico: CorreoElectronico, admin: 0, password: password, login: 0
        };
        return this.http.post('http://localhost:8000/api/usuario/register/', datos);
    };
    ApiService.prototype.login = function (Email, password) {
        var datos = {
            CorreoElectronico: Email,
            password: password
        };
        return this.http.post('http://localhost:8000/api/usuario/login/', datos);
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
