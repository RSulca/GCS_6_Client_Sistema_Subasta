import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Admin } from '../../app/models/request/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  obtener(id2:string){
    const id = id2;
    const url = `${environment.API_SUBASTA}/api/admin/obtener/${id}`;
    return this.http.get<Admin>(url);
  }

}
