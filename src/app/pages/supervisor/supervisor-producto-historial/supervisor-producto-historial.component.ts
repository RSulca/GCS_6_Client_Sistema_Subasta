import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { SupervisorProductoHistorialDetalleComponent } from 'src/app/pages/supervisor/supervisor-producto-historial-detalle/supervisor-producto-historial-detalle.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/models/request/producto.model';

@Component({
  selector: 'app-supervisor-producto-historial',
  templateUrl: './supervisor-producto-historial.component.html',
  styleUrls: ['./supervisor-producto-historial.component.css']
})
export class SupervisorProductoHistorialComponent implements OnInit {

  productos : Producto[];

  constructor(private ls: LocalStorageService, private productoService:ProductoService, private modalService: NgbModal) {  }

  ngOnInit(): void {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.listarProductoYUsuario(usuario.category);
  }

  listarProductoYUsuario(category:string){
    this.productoService.listarProductosYUsuarios(category)
      .subscribe(data => {
       this.productos = data['products'];
       console.log(this.productos);
      // console.log(this.productos);
      })
  }

  verHistorialDetalle(id:string){
    const modal =  this.modalService.open(SupervisorProductoHistorialDetalleComponent);

    const modalInstance = modal.componentInstance;

    modalInstance.idProducto = id;

    modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
  }

  handleModalTodoFormClose(){
    // alert('se ha cerrado el modal');
  }


}
