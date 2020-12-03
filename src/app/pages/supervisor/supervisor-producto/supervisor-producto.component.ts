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
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ESTADOS_PRODUCTO } from 'src/app/util/estados';

@Component({
  selector: 'app-supervisor-producto',
  templateUrl: './supervisor-producto.component.html',
  styleUrls: ['./supervisor-producto.component.css']
})
export class SupervisorProductoComponent implements OnInit {

  productos: Producto[];

  constructor(private nf: NotifierService, private router:Router, private productoService:ProductoService, private ls: LocalStorageService, private modalService: NgbModal, private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.listarPorCategoria(usuario.category);
    this.webSocketService.listen('actualiza').subscribe((data)=>{
      console.log(data);
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

  handleModalTodoFormClose(){
   // alert('se ha cerrado el modal');
 }

 aprobar(id:string, state: string){
   if(state == ESTADOS_PRODUCTO[3]){
    alert('Tiene un producto en subsanación')
   }else{
    if(confirm('Está seguro de aprobar?')){
      this.productoService.aprobar(id)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Aprobación exitosa.',
          'description': 'Se ha aprobado correctamente.'
        });
      })
      this.modalService.dismissAll();
    } 
   }
 }

 rechazarDetalle(id:string){
  const modal =  this.modalService.open(SupervisorProductoRechazoDetalleComponent);

  const modalInstance = modal.componentInstance;

  modalInstance.idProducto = id;

  modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
 }

 subsanarDetalle(id:string, state: string){
  if(state == ESTADOS_PRODUCTO[3]){
    alert('Tiene un producto en subsanación')
  }else{
    const modal =  this.modalService.open(SupervisorProductoSubsanarDetalleComponent);

    const modalInstance = modal.componentInstance;
  
    modalInstance.idProducto = id;
  
    modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
  }
 }


}
