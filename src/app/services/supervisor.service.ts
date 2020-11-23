import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Supervisor } from '../../app/models/request/supervisor.model';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http:HttpClient) { }

  registrar(supervisor:Supervisor){
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

  inhabilitar(id2:string){
    const id = id2;
    const state = false;
    const url = `${environment.API_SUBASTA}/api/supervisor/eliminar`;
    return this.http.put<Supervisor[]>(url, {id, state});
  }

  habilitar(id2:string){
    const id = id2;
    const state = true;
    const url = `${environment.API_SUBASTA}/api/supervisor/eliminar`;
    return this.http.put<Supervisor[]>(url, {id, state});
  }

  obtener(id2:string){
    const id = id2;
    const url = `${environment.API_SUBASTA}/api/supervisor/obtener/${id}`;
    return this.http.get<Supervisor>(url);
  }

  cantidadSupervisores(){
    const url = `${environment.API_SUBASTA}/api/supervisor/cantidad`;
    return this.http.get<number>(url);
  }

}
