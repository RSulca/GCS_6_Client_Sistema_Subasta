import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/supervisor', title: 'Supervisor',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/supervisor/perfil', title: 'Perfil',  icon:'ni-planet text-blue', class: '' },
//  { path: '/admin/clientes', title: 'Clientes',  icon:'ni-single-02 text-yellow', class: '' }
//  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-supervisor-sidebar',
  templateUrl: './supervisor-sidebar.component.html',
  styleUrls: ['./supervisor-sidebar.component.css']
})
export class SupervisorSidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
