import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Supervisor } from '../../app/models/request/supervisor.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ReporteService {

    constructor(private http: HttpClient, private ls: LocalStorageService) { }

    productosXfechaSupervisor(fechaInicio: string, fechaFin: string) {
        const url = `${environment.API_SUBASTA}/api/reportes/productsByCategory/${fechaInicio}/${fechaFin}`;
        return this.http.get<Supervisor[]>(url, { headers: { 'x-token': this.ls.getData('token') } });
    }

    getCountXCategories() {
        const url = `${environment.API_SUBASTA}/api/reportes/totalProductsByCategory`;
        return this.http.get(url, { headers: { 'x-token': this.ls.getData('token') } });
    }

    getCustomersXUser() {
        const url = `${environment.API_SUBASTA}/api/reportes/compradores`;
        return this.http.get(url, { headers: { 'x-token': this.ls.getData('token') } });
    }

}
