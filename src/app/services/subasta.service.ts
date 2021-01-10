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

  listarHistorialCompras(idComprador: string){
    const url = `${environment.API_SUBASTA}/api/subasta/getSubastasByIdComprador/${idComprador}`;
    return this.http.get<Subasta[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  calificarSubasta(idSubasta: string, calificacion: number, mensajeCalificacion: string){
    const url = `${environment.API_SUBASTA}/api/subasta/calificar`;
    return this.http.put<Subasta[]>(url, { idSubasta, calificacion, mensajeCalificacion }, { headers: { 'x-token': this.ls.getData('token') } });
  }

  crearSubasta(idProducto: string, data: any){
    console.log(idProducto);
    console.log(data);
    /*
    const url = `${environment.API_SUBASTA}/api/subasta/${idProducto}`;
    return this.http.post<Subasta[]>(url, data, { headers: { 'x-token': this.ls.getData('token') } });
    */
  }

}
