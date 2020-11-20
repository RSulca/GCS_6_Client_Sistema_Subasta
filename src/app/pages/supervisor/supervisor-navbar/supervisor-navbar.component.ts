import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES3 } from '../supervisor-sidebar/supervisor-sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductoService } from 'src/app/services/producto.service';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(location: Location,  private element: ElementRef, private router: Router, private clienteService: ClienteService, private productoService: ProductoService, private loginService: LoginService) {
    this.location = location;
    this.cantidadClientes();
    this.cantidadProductos();
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

  onLogout() {
    this.loginService.logout();
   }

}