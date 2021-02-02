import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  usuario: any = {};
  token: any = {};
  rol: any = {};

  constructor(private http: HttpClient, private router: Router, private ls: LocalStorageService) {
    this.loadStorage();
    this.loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable(); // {2}
  }
  private tokenAvailable(): boolean {
    return !!this.ls.getData('token');
  }

  loadStorage() {
    if (this.ls.getData('token')) {
      this.token = this.ls.getData('token');
      this.usuario = JSON.parse(this.ls.getData('user'));
      this.rol = this.ls.getData('rol');
    } else {
      this.token = '';
      this.usuario = null;
      this.rol = '';
    }
  }

  loginGoogle(token: string) {
    const url = `${environment.API_SUBASTA}/api/auth/google`;
    return this.http.post(url, { token: token }).pipe(
      map((data: any) => {
        this.saveStorage(data);
        this.loggedIn.next(true);
        return data;
      }),
      catchError(err => {
        return throwError(err.error.message);
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
        this.loggedIn.next(true);
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
        this.saveStorage(data);
        this.loggedIn.next(true);
        return data;
      }),
      catchError(err => {
        return throwError(err.error);
      })
    );
  }

  logout(): void {
    this.usuario = null;
    this.token = '';

    this.ls.removeData('token');
    this.ls.removeData('user');
    this.ls.removeData('rol');

    this.router.navigate(['/login']);
    this.loggedIn.next(false);


  }

  saveStorage(data: any) {
    this.ls.setData('token', data.token);
    this.ls.setData('rol', data.role);
    this.ls.setData('user', JSON.stringify(data.user))

    this.usuario = data.user;
    this.token = data.token;
    this.rol = data.role;
  }


}
