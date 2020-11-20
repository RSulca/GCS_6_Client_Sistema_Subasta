import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin', title: 'Administrador',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/admin/supervisores', title: 'Supervisores',  icon:'ni-support-16 text-blue', class: '' },
    { path: '/admin/clientes', title: 'Clientes',  icon:'ni-single-02 text-yellow', class: '' }
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

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  onLogout() {
    this.loginService.logout();
   }
   
}
