import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UbigeoService {

  constructor(private http:HttpClient, private ls: LocalStorageService) { }

  getDepartment() {
    const url = `${environment.API_SUBASTA}/api/ubigeo/departamento` ;
    return this.http.get(url, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }
  getProvince(idDepartment) {
    const url = `${environment.API_SUBASTA}/api/ubigeo/provincia/${idDepartment}` ;
    return this.http.get(url, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }
  getDistrict(idDepartament,idProvince) {
    const url = `${environment.API_SUBASTA}/api/ubigeo/distrito/${idDepartament}/${idProvince}` ;
    return this.http.get(url, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }
}
