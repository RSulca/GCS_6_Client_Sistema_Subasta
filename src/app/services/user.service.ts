import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/request/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private ls: LocalStorageService) {

  }

  getUserById(id: any) {
    const url = `${environment.API_SUBASTA}/api/user/${id}`;
    return this.http.get(url, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }

  editUser(data: User, userId: any) {
    const url = `${environment.API_SUBASTA}/api/user/${userId}`;
    return this.http.put(url, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }

}
