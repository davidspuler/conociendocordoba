import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api/character/1,183';
  private urlApiVarios = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);

  }

  public getDataVarios(ids: string): Observable<any> {
    return this.http.get<any>(this.urlApiVarios + ids);
  }

  public createUsuario(Nombre:string, Apellido: string, FechaNacimiento: Date, CorreoElectronico: string, 
    password: string): Observable<any> {
    const datos = {
      Nombre: Nombre, Apellido: Apellido, FechaNacimiento: FechaNacimiento, 
      CorreoElectronico: CorreoElectronico, admin: 0, password:password, login: 0
    }
    return this.http.post<any>('http://localhost:8000/api/usuario/register/', datos);
  }

  public login(Email:string, password: string): Observable<any>{
    const datos = {
      CorreoElectronico: Email,
      password: password
    }
    return this.http.post<any>('http://localhost:8000/api/usuario/login/', datos);
  } 
}



