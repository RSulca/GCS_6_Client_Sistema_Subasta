import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES1: RouteInfo[] = [
  { path: '/supervisor', title: 'Supervisor',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/supervisor/perfil', title: 'Perfil',  icon:'ni-planet text-blue', class: '' },
//  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' }
];

export const ROUTES2: RouteInfo[] = [
  { path: '/supervisor/productos', title: 'Productos',  icon:'ni-single-02 text-yellow', class: '' }
//  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' }
];

export const ROUTES3: RouteInfo[] = [
  { path: '/supervisor', title: 'Supervisor',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/supervisor/perfil', title: 'Perfil',  icon:'ni-planet text-blue', class: '' },
  { path: '/supervisor/productos', title: 'Productos',  icon:'ni-single-02 text-yellow', class: '' }
//  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-supervisor-sidebar',
  templateUrl: './supervisor-sidebar.component.html',
  styleUrls: ['./supervisor-sidebar.component.css']
})
export class SupervisorSidebarComponent implements OnInit {

  public menuItems1: any[];
  public menuItems2: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menu1();
    this.menu2();
  }

  menu1(){
    this.menuItems1 = ROUTES1.filter(menuItem1 => menuItem1);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  menu2(){
    this.menuItems2 = ROUTES2.filter(menuItem2 => menuItem2);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
