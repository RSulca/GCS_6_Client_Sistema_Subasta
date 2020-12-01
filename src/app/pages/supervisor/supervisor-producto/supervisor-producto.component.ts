import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/request/producto.model';
import { SupervisorProductoDetalleComponent } from 'src/app/pages/supervisor/supervisor-producto-detalle/supervisor-producto-detalle.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-supervisor-producto',
  templateUrl: './supervisor-producto.component.html',
  styleUrls: ['./supervisor-producto.component.css']
})
export class SupervisorProductoComponent implements OnInit {

  productos: Producto[];

  constructor(private nf: NotifierService, private router:Router, private productoService:ProductoService, private ls: LocalStorageService, private modalService: NgbModal) { }

  ngOnInit(): void {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.listarPorCategoria(usuario.category);
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

 aprobar(){
   alert('aprobado');
 }


}
