import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../models/request/producto.model';
import { LocalStorageService } from './local-storage.service';
import { map, mergeMap } from 'rxjs/operators';
import { ESTADOS_PRODUCTO } from '../util/estados';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient, private ls: LocalStorageService) { }

  listarPorCategoria(category: string) {
    const url = `${environment.API_SUBASTA}/api/product/listarPorCategoria/${category}`;
    return this.http.get<Producto[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  listarProductosYUsuarios(category: string, filter: string){
    const url = `${environment.API_SUBASTA}/api/product/listarProductosyClientes/${category}/${filter}`;
    return this.http.get<Producto[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  obtenerHistorialProducto(id: string){
    const url = `${environment.API_SUBASTA}/api/product/historial/${id}`;
    return this.http.get<Producto[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  cantidadProductos() {
    const url = `${environment.API_SUBASTA}/api/product/cantidad`;
    return this.http.get<number>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  obtenerProducto(id: string){
    const url = `${environment.API_SUBASTA}/api/product/obtener/${id}`;
    return this.http.get<Producto>(url, { headers: { 'x-token': this.ls.getData('token') } });
  }

  /**Este servicio registra las fotos de un producto  para luego ser revisado por el supervisor*/
  saveProductPaso1(files: File[]) {
    const url = `${environment.API_SUBASTA}/api/upload/product`;
    const formData: FormData = new FormData(); 
    if (files.length > 0) {
      formData.append('img1', files[0]);
      formData.append('img2', files[1]);
      formData.append('img3', files[2]);
    }
    return this.http.post(url, formData, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }

  /**Este servicio registra un producto  para luego ser revisado por el supervisor*/
  saveProductPaso2(data: any) {
    const url = `${environment.API_SUBASTA}/api/product`;
    return this.http.post(url, data, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }

  saveProduct(data: Producto, files: File[]) {
    if (files) {
      return this.saveProductPaso1(files).pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }),
        mergeMap((response2): any => {
          data.imgs = response2.urls;
          console.log("antes de enviar", data)
          return this.saveProductPaso2(data).pipe();
        })
      )
    }
  }

  getProductByUser() {
    const url = `${environment.API_SUBASTA}/api/product`;
    return this.http.get(url, { headers: { 'x-token': this.ls.getData('token') } }).pipe();

  }

  aprobar(id2: string){
    const id = id2;
    const state = ESTADOS_PRODUCTO[1];
    const url = `${environment.API_SUBASTA}/api/product/actualizarEstado`;
    return this.http.put(url, { id, state }, { headers: { 'x-token': this.ls.getData('token') } })
  }

  rechazar(id2: string, motivoRechazo: string){
    const id = id2;
    const motivo_rechazo = motivoRechazo;
    const state = ESTADOS_PRODUCTO[2];
    const url = `${environment.API_SUBASTA}/api/product/actualizarEstado`;
    return this.http.put(url, { id, motivo_rechazo, state }, { headers: { 'x-token': this.ls.getData('token') } })
  }

  subsanar(id2: string, motivoSubsanacion: string){
    const id = id2;
    const motivo_subsanacion = motivoSubsanacion;
    const state = ESTADOS_PRODUCTO[3];
    const url = `${environment.API_SUBASTA}/api/product/actualizarEstado`;
    return this.http.put(url, { id, motivo_subsanacion, state }, { headers: { 'x-token': this.ls.getData('token') } })
  }

}
