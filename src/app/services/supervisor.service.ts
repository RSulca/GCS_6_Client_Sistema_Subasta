import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supervisor } from '../../app/models/request/supervisor.model';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  url='http://localhost:3555/api/register/supervisor';

  constructor(private http:HttpClient) { }

  registrar(supervisor:Supervisor){
    console.log(supervisor);
    return this.http.post<Supervisor>(this.url, supervisor);
  }

}
