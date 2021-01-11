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
    console.log('iii' + idComprador);
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

  obtenerSubasta(id: string) {
    const url = `${environment.API_SUBASTA}/api/subasta/${id}`;
    return this.http.get<Subasta[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  finalizarSubasta(idSubasta: string, precioPagado: number, idComprador: string) {
    const url = `${environment.API_SUBASTA}/api/subasta/finalizar/${idSubasta}`;
    return this.http.put<Subasta[]>(url, { precioPagado, idComprador }, { headers: { 'x-token': this.ls.getData('token') } });
  }

  subastasPorCategoria(categoryName: any) {
    const url = `${environment.API_SUBASTA}/api/subasta/category/${categoryName}`;
    return this.http.get(url);

  }

  pujar(id: string, monto: number){
    var d = new Date();
    var h = this.addZero(d.getHours());
    var m = this.addZero(d.getMinutes());
    var s = this.addZero(d.getSeconds());
    let hora = h + ":" + m + ":" + s;
    let dia = d.toISOString();
    const url = `${environment.API_SUBASTA}/api/subasta/pujar/${id}`;
    return this.http.post(url, { monto, hora, dia }, { headers: { 'x-token': this.ls.getData('token') } });
  }

  addZero = (i: any): any => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }


}
