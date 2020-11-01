import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private ls: LocalStorageService) { }


  loginGoogle(token: string) {
    const url = `${environment.API_SUBASTA}/api/auth/google`;
    return this.http.post(url, { token: token }).pipe(
      map((data: any) => {
        this.saveStorage(data);
        return data;
      })
    );

  }


  login(data: any, remenber: any) {
    if (remenber) {
      this.ls.setData('email', data.email)
    } else {
      this.ls.removeData('email');
    }
    const url = `${environment.API_SUBASTA}/api/auth`;
    return this.http.post(url, data).pipe(
      map((data: any) => {
        this.saveStorage(data);
        return data;
      }),
      catchError(err => {
        console.log(err)
        return throwError(err.error);
      })
    );
  }

  registerClient(data: any) {
    const url = `${environment.API_SUBASTA}/api/register`;
    return this.http.post(url, data).pipe(
      map((data: any) => {
        this.ls.setData('token', data.token);
        this.ls.setData('client', JSON.stringify(data.user))
        return data;
      }),
      catchError(err => {
        return throwError(err.error);
      })
    );
  }

  saveStorage(data: any) {
    this.ls.setData('token', data.token);
    this.ls.setData('client', JSON.stringify(data.user))
  }

}
