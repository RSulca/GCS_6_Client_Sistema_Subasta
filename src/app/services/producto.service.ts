import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../models/request/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  listarPorCategoria(category2:string){
    const category = category2
    const url = `${environment.API_SUBASTA}/api/product/listarPorCategoria/${category}`;
    return this.http.get<Producto[]>(url);
  } 

  cantidadProductos(){
    const url = `${environment.API_SUBASTA}/api/product/cantidad`;
    return this.http.get<number>(url);
  }

}
