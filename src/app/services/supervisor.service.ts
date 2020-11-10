import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Supervisor } from '../../app/models/request/supervisor.model';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http:HttpClient) { }

  registrar(supervisor:Supervisor){
    console.log(supervisor.id + ' ' + supervisor.email);
    if (supervisor.id == null || supervisor.id == ''){
      const url = `${environment.API_SUBASTA}/api/register/supervisor`;
      return this.http.post<Supervisor>(url, supervisor);
    }else{
      const url = `${environment.API_SUBASTA}/api/supervisor/actualizar`;
      return this.http.put<Supervisor>(url, supervisor);
    }
  }

  listar(){
    const url = `${environment.API_SUBASTA}/api/supervisor/listar`;
    return this.http.get<Supervisor[]>(url);
  } 

}
