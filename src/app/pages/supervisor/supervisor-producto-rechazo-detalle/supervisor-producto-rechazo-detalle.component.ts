import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'src/app/services/notifier.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-supervisor-producto-rechazo-detalle',
  templateUrl: './supervisor-producto-rechazo-detalle.component.html',
  styleUrls: ['./supervisor-producto-rechazo-detalle.component.css']
})
export class SupervisorProductoRechazoDetalleComponent implements OnInit {

  registroRechazoDetalleForm: FormGroup;
  
  idProducto: string;
  name: string;
  lastname: string;

  constructor(private fb: FormBuilder, private nf: NotifierService, private productoService:ProductoService, private modalService: NgbModal) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  get motivoRechazo(){
    return this.registroRechazoDetalleForm.get('motivoRechazo');
  }

  initForm() {
    this.registroRechazoDetalleForm = this.fb.group({
      motivoRechazo: ['', [Validators.required]]
    });
  }

  submit(){
    if(confirm('Está seguro de rechazar?')){
      this.productoService.rechazar(this.idProducto, this.motivoRechazo.value, this.name, this.lastname)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Rechazo exitoso.',
          'description': 'Se ha rechazado correctamente.'
        });
        this.modalService.dismissAll();
      })
    } 
  }

}
