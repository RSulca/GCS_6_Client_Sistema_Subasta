import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';
import { ClientReq } from 'src/app/models/request/client.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: ClientReq[];

  constructor(private nf: NotifierService, private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clienteService.listar()
      .subscribe(data => {
        this.clientes = data['user'];
      })
  }

  inhabilitar(id: number){
    if(confirm('Está seguro de inhabilitar?')){
      this.clienteService.inhabilitar(id)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Eliminación exitosa.',
          'description': 'Se ha deshabilitado correctamente.'
        });
        this.listar();
      })
    } 
  }

  habilitar(id: number){
    if(confirm('Está seguro de habilitar?')){
      this.clienteService.habilitar(id)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Habilitación exitosa.',
          'description': 'Se ha habilitado correctamente.'
        });
        this.listar();
      })
    } 
  }

}
