import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'http://127.0.0.1:8000/api/v1Productos/';
    
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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



