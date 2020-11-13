import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ClientReq } from '../models/request/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  listar(){
    const url = `${environment.API_SUBASTA}/api/cliente/listar`;
    return this.http.get<ClientReq[]>(url);
  } 

  inhabilitar(id2:number){
    const id = id2;
    const state = false;
    const url = `${environment.API_SUBASTA}/api/cliente/eliminar`;
    return this.http.put<ClientReq[]>(url, {id, state});
  }

  habilitar(id2:number){
    const id = id2;
    const state = true;
    const url = `${environment.API_SUBASTA}/api/cliente/eliminar`;
    return this.http.put<ClientReq[]>(url, {id, state});
  }

}
