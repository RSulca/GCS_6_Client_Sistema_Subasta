import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private ls: LocalStorageService) { }
  canActivate(route: ActivatedRouteSnapshot) {
   let rol =  this.ls.getData('rol')
   if(rol == 'ADMIN_ROLE'){
     return true;
   }
    return false;
  }
}
