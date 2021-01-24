import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flatMap, map, mergeMap } from 'rxjs/operators';
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

  /**Este servicio modifica los datos de un usuario por id*/
  editUserPaso2(data: User, userId: any) {
    const url = `${environment.API_SUBASTA}/api/user/${userId}`;
    return this.http.put(url, data, { headers: { 'x-token': this.ls.getData('token') } }).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }

  /**Este servicio modifica la foto de perfil de un usuario por id*/
  editUserPaso1(file: File, userId: any) {
    const url = `${environment.API_SUBASTA}/api/upload/user/${userId}`;
    const formData: FormData = new FormData();
    if (file) {
      formData.append('photo', file);
    }
    return this.http.post(url, formData, { headers: { 'x-token': this.ls.getData('token') } }).pipe();
  }

  editUser(data: User, userId: any) {
    if (data.img) {
      return this.editUserPaso1(data.img, userId).pipe(
        map((response: any) => response),
        mergeMap((response2): any => {
          data.img = response2.data;
          console.log("antes de enviar", data)
          return this.editUserPaso2(data, userId).pipe();
        })
      )
    } else {
      return this.editUserPaso2(data, userId).pipe();
    }
  }



}
