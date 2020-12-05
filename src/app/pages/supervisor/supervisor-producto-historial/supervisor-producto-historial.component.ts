import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  filtroProductoForm: FormGroup;

  productos : Producto[];

  usuario: any;

  constructor(private fb: FormBuilder, private ls: LocalStorageService, private productoService:ProductoService, private modalService: NgbModal) {
    this.initForm();
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(this.ls.getData('user'));
    this.listarProductoYUsuario(this.usuario.category, 'all');
  }

  get dni(){
    return this.filtroProductoForm.get('dni');
  }

  initForm() {
    this.filtroProductoForm = this.fb.group({
      dni: ['', Validators.compose([Validators.pattern('[0-9]{8}')])],
    })
  };

  listarProductoYUsuario(category:string, filter:string){
    this.productoService.listarProductosYUsuarios(category, filter)
      .subscribe(data => {
       this.productos = data['products'];
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

  filtrar(){
    if(this.dni.value == ''){
      this.listarProductoYUsuario(this.usuario.category, 'all')
    }else{
      this.listarProductoYUsuario(this.usuario.category, this.dni.value);
    }
  }

  limpiar(){
    this.filtroProductoForm.setValue({dni: ''});
  }


}
