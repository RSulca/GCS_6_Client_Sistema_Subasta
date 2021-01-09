import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Supervisor } from '../../app/models/request/supervisor.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http:HttpClient, private ls: LocalStorageService) { }

  registrar(supervisor:Supervisor){
    if (supervisor.id == null || supervisor.id == ''){
      const url = `${environment.API_SUBASTA}/api/register/supervisor`;
      return this.http.post<Supervisor>(url, supervisor, { headers: { 'x-token': this.ls.getData('token') } });
    }else{
      const url = `${environment.API_SUBASTA}/api/supervisor/actualizar`;
      return this.http.put<Supervisor>(url, supervisor, { headers: { 'x-token': this.ls.getData('token') } });
    }
  }

  listar(){
    const url = `${environment.API_SUBASTA}/api/supervisor/listar`;
    return this.http.get<Supervisor[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  } 

  inhabilitar(id2:string){
    const id = id2;
    const state = false;
    const url = `${environment.API_SUBASTA}/api/supervisor/eliminar`;
    return this.http.put<Supervisor[]>(url, {id, state}, { headers: { 'x-token': this.ls.getData('token') } });
  }

  habilitar(id2:string){
    const id = id2;
    const state = true;
    const url = `${environment.API_SUBASTA}/api/supervisor/eliminar`;
    return this.http.put<Supervisor[]>(url, {id, state}, { headers: { 'x-token': this.ls.getData('token') } });
  }

  obtener(id2:string){
    const id = id2;
    const url = `${environment.API_SUBASTA}/api/supervisor/obtener/${id}`;
    return this.http.get<Supervisor>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  cantidadSupervisores(){
    const url = `${environment.API_SUBASTA}/api/supervisor/cantidad`;
    return this.http.get<number>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  subirImagen(files: File, id2: string) {
    const id = id2;
    const url = `${environment.API_SUBASTA}/api/upload/user/${id}`;
    const formData: FormData = new FormData();
      formData.append('photo', files);
    
    return this.http.post(url, formData, { headers: { 'x-token': this.ls.getData('token') } });
  }

}
