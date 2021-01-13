import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ClientReq } from '../models/request/client.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private ls: LocalStorageService) { }

  listar() {
    const url = `${environment.API_SUBASTA}/api/cliente/listar`;
    return this.http.get<ClientReq[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  inhabilitar(id2: number) {
    const id = id2;
    const state = false;
    const url = `${environment.API_SUBASTA}/api/cliente/eliminar`;
    return this.http.put<ClientReq[]>(url, { id, state }, { headers: { 'x-token': this.ls.getData('token') } });
  }

  habilitar(id2: number) {
    const id = id2;
    const state = true;
    const url = `${environment.API_SUBASTA}/api/cliente/eliminar`;
    return this.http.put<ClientReq[]>(url, { id, state }, { headers: { 'x-token': this.ls.getData('token') } });
  }

  cantidadClientes() {
    const url = `${environment.API_SUBASTA}/api/cliente/cantidad`;
    return this.http.get<number>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  obtenerCalificacionVendendor(idSubasta: string){
    console.log('aaaaa' + idSubasta);
    const url = `${environment.API_SUBASTA}/api/cliente/obtenerCalificacionVendedor/${idSubasta}`;
    return this.http.get<number>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }


}
