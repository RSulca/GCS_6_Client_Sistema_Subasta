import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES1: RouteInfo[] = [
  { path: '/supervisor', title: 'Supervisor',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/supervisor/perfil', title: 'Perfil',  icon:'ni-single-02 text-green', class: '' }
];

export const ROUTES2: RouteInfo[] = [
  { path: '/supervisor/productos', title: 'Productos',  icon:'ni-money-coins text-blue', class: '' },
  { path: '/supervisor/productos/historial', title: 'Historial',  icon:'fa fa-book text-yellow', class: '' },
  { path: '/supervisor/productos/reporte', title: 'Reporte',  icon:'far fa-chart-bar text-red', class: '' }
];

export const ROUTES3: RouteInfo[] = [
  { path: '/supervisor', title: 'Supervisor',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/supervisor/perfil', title: 'Perfil',  icon:'ni-single-02 text-green', class: '' },
  { path: '/supervisor/productos', title: 'Productos',  icon:'ni-money-coins text-blue', class: '' },
  { path: '/supervisor/productos/historial', title: 'Historial de Productos',  icon:'fa fa-book text-yellow', class: '' },
  { path: '/supervisor/productos/reporte', title: 'Reporte de subastas',  icon:'far fa-chart-bar text-red', class: '' }
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

  imgSupervisor: string;

  constructor(private router: Router, private loginService: LoginService, private supervisorService:SupervisorService, private ls: LocalStorageService) { }

  ngOnInit() {
    this.menu1();
    this.menu2();
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtener(usuario._id);
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

  obtener(id: string){
    this.supervisorService.obtener(id)
      .subscribe(data => {
        this.imgSupervisor = data['user'].img;
      })
  }

  onLogout() {
    this.loginService.logout();
   }

}
