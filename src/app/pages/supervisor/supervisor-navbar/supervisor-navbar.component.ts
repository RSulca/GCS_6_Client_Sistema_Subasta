import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES3 } from '../supervisor-sidebar/supervisor-sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductoService } from 'src/app/services/producto.service';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor-navbar',
  templateUrl: './supervisor-navbar.component.html',
  styleUrls: ['./supervisor-navbar.component.css']
})
export class SupervisorNavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  numeroClientes: number;
  numeroProductos: number;
  imgSupervisor: string;

  constructor(location: Location,  private element: ElementRef, private router: Router, private clienteService: ClienteService, private productoService: ProductoService, private loginService: LoginService, private supervisorService:SupervisorService, private ls: LocalStorageService) {
    this.location = location;
    this.cantidadClientes();
    this.cantidadProductos();
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtener(usuario._id);
  }


  ngOnInit() {
    this.listTitles = ROUTES3.filter(listTitle => listTitle);
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
    return '/supervisor';
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
    this.supervisorService.obtener(id)
      .subscribe(data => {
        this.imgSupervisor = data['user'].img;
      })
  }

  onLogout() {
    this.loginService.logout();
   }

}