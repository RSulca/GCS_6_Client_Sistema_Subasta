import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AdminService } from 'src/app/services/admin.service';

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

  constructor(private router: Router, private loginService: LoginService, private adminService:AdminService, private ls: LocalStorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   let usuario = JSON.parse(this.ls.getData('user'));
   this.obtener(usuario._id);
  }

  obtener(id: string){
    this.adminService.obtener(id)
      .subscribe(data => {
        this.imgAdministrador = data['user'].img;
      })
  }

  onLogout() {
    this.loginService.logout();
   }
   
}
