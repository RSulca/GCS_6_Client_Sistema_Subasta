import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductoService } from 'src/app/services/producto.service';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  numeroSupervisores: number;
  numeroClientes: number;
  numeroProductos: number;
  imgAdministrador: string;

  constructor(location: Location,  private element: ElementRef, private router: Router, private supervisorService: SupervisorService, private clienteService: ClienteService, private productoService: ProductoService, private loginService: LoginService, private adminService:AdminService, private ls: LocalStorageService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.cantidadSupervisores();
    this.cantidadClientes();
    this.cantidadProductos();
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtener(usuario._id);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return '/admin';
  }

  cantidadSupervisores(){
    this.supervisorService.cantidadSupervisores()
      .subscribe(data => {
        this.numeroSupervisores = data['cantidad'];
      })
  }

  cantidadClientes(){
    this.clienteService.cantidadClientes()
      .subscribe(data => {
        this.numeroClientes = data['cantidad'];
      })
  }

  cantidadProductos(){
    this.productoService.cantidadProductos()
      .subscribe(data => {
        this.numeroProductos = data['cantidad'];
      })
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
