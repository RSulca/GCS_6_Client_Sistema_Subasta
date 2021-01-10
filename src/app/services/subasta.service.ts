import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subasta } from '../models/request/subasta.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SubastaService {

  constructor(private http: HttpClient, private ls: LocalStorageService) { }

  listarHistorialCompras(idComprador: string) {
    const url = `${environment.API_SUBASTA}/api/subasta/getSubastasByIdComprador/${idComprador}`;
    return this.http.get<Subasta[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  calificarSubasta(idSubasta: string, calificacion: number, mensajeCalificacion: string) {
    const url = `${environment.API_SUBASTA}/api/subasta/calificar`;
    return this.http.put<Subasta[]>(url, { idSubasta, calificacion, mensajeCalificacion }, { headers: { 'x-token': this.ls.getData('token') } });
  }

  crearSubasta(idProducto: any, idVendedor: any, subasta: any) {
    const url = `${environment.API_SUBASTA}/api/subasta/${idProducto}/vendedor/${idVendedor}`;
    return this.http.post(url, subasta, { headers: { 'x-token': this.ls.getData('token') } });

  }

  obtenerSubasta(id: string){
    const url = `${environment.API_SUBASTA}/api/subasta/${id}`;
    return this.http.get<Subasta[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  finalizarSubasta(idSubasta: string, precioPagado: number, idComprador: string) {
    const url = `${environment.API_SUBASTA}/api/subasta/finalizar//${idSubasta}`;
    return this.http.put<Subasta[]>(url, { precioPagado, idComprador }, { headers: { 'x-token': this.ls.getData('token') } });
  }

}
