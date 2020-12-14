import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Categoria } from '../models/request/categoria.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  obtenerCategoria(){
    const url = `${environment.API_SUBASTA}/api/category`;
    return this.http.get<Categoria[]>(url).pipe();
  }

}
