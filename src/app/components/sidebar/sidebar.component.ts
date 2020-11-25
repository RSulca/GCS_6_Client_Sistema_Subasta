import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin', title: 'Administrador',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/admin/supervisores', title: 'Supervisores',  icon:'fas fa-user-secret', class: '' },
    { path: '/admin/clientes', title: 'Clientes',  icon:'fas fa-user', class: '' }
  //  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  imgAdministrador: string;

  constructor(private router: Router, private loginService: LoginService, private ls: LocalStorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   this.imgAdministrador = this.ls.getData('imagenAdministrador');
  }

  onLogout() {
    this.loginService.logout();
   }
   
}
