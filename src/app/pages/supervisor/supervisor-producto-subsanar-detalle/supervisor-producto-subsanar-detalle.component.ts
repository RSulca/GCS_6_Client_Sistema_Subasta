import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'src/app/services/notifier.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-supervisor-producto-subsanar-detalle',
  templateUrl: './supervisor-producto-subsanar-detalle.component.html',
  styleUrls: ['./supervisor-producto-subsanar-detalle.component.css']
})
export class SupervisorProductoSubsanarDetalleComponent implements OnInit {

  registroSubsanarDetalleForm: FormGroup;
  
  idProducto: string;

  constructor(private fb: FormBuilder, private nf: NotifierService, private productoService:ProductoService, private modalService: NgbModal) { 
    this.initForm();
  }

  ngOnInit(): void {
  }

  get motivoSubsanar(){
    return this.registroSubsanarDetalleForm.get('motivoSubsanar');
  }

  initForm() {
    this.registroSubsanarDetalleForm = this.fb.group({
      motivoSubsanar: ['', [Validators.required]]
    });
  }

  submit(){
    if(confirm('Está seguro de pedir la subsanación?')){
      this.productoService.subsanar(this.idProducto, this.motivoSubsanar.value)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Petición de subsanación exitosa.',
          'description': 'Se ha pedido la subsanación correctamente.'
        });
      })
      this.modalService.dismissAll();
    } 
  }

}
