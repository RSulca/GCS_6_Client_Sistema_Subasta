import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/request/producto.model';
import { SupervisorProductoDetalleComponent } from 'src/app/pages/supervisor/supervisor-producto-detalle/supervisor-producto-detalle.component';
import { SupervisorProductoRechazoDetalleComponent } from 'src/app/pages/supervisor/supervisor-producto-rechazo-detalle/supervisor-producto-rechazo-detalle.component';
import { SupervisorProductoSubsanarDetalleComponent } from 'src/app/pages/supervisor/supervisor-producto-subsanar-detalle/supervisor-producto-subsanar-detalle.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ESTADOS_PRODUCTO } from 'src/app/util/estados';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-supervisor-producto',
  templateUrl: './supervisor-producto.component.html',
  styleUrls: ['./supervisor-producto.component.css']
})
export class SupervisorProductoComponent implements OnInit {
  usuario:any;
  
  productos: Producto[];

  usuario: any;

  constructor(private nf: NotifierService, private router:Router, private productoService:ProductoService, 
    private ls: LocalStorageService,private modalService: NgbModal, private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(this.ls.getData('user'));
    this.listarPorCategoria(this.usuario.category);
    this.webSocketService.listen('producto_nuevo').subscribe((data)=>{
      this.nf.notification("success", {
        'title': 'Alerta',
        'description': 'Tiene nuevos artículos por revisar.'
      });
      this.listarPorCategoria(data['product'].category);
    })
  }

  listarPorCategoria(category:string){
    this.productoService.listarPorCategoria(category)
      .subscribe(data => {
       this.productos = data['categoria'];
      })
  }

  verDetalles(id:string){
    const modal =  this.modalService.open(SupervisorProductoDetalleComponent);

    const modalInstance = modal.componentInstance;

    modalInstance.idProducto = id;

    modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
  }

 aprobar(id:string, state: string){
   if(state == ESTADOS_PRODUCTO[3]){
    alert('Tiene un producto en subsanación')
   }else{
    if(confirm('Está seguro de aprobar?')){
      this.productoService.aprobar(id, this.usuario.name, this.usuario.lastname)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Aprobación exitosa.',
          'description': 'Se ha aprobado correctamente.'
        });
        this.listarPorCategoria(this.usuario.category);
      })
    } 
   }
 }

 rechazarDetalle(id:string){
  const modal =  this.modalService.open(SupervisorProductoRechazoDetalleComponent);

  const modalInstance = modal.componentInstance;

  modalInstance.idProducto = id;
  modalInstance.name = this.usuario.name;
  modalInstance.lastname = this.usuario.lastname;

  modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
 }

 subsanarDetalle(id:string, state: string){
  if(state == ESTADOS_PRODUCTO[3]){
    alert('Tiene un producto en subsanación')
  }else{
    const modal =  this.modalService.open(SupervisorProductoSubsanarDetalleComponent);

    const modalInstance = modal.componentInstance;
  
    modalInstance.idProducto = id;
    modalInstance.name = this.usuario.name;
    modalInstance.lastname = this.usuario.lastname;
  
    modal.result.then(this.handleModalTodoFormClose.bind(this),this.handleModalTodoFormClose.bind(this));
  }
 }
 
  handleModalTodoFormClose(){
    this.listarPorCategoria(this.usuario.category);
  }

}
