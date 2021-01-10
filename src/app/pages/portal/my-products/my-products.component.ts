import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubastaService } from 'src/app/services/subasta.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  registrarSubastaForm: FormGroup;
  idProducto: string;

  constructor(private fb: FormBuilder, private subastaService: SubastaService, private _route: ActivatedRoute) {
    this.initForm();
    this.idProducto = this._route.snapshot.paramMap.get('idProducto');
  }

  ngOnInit(): void {

  }

  get titulo(){
    return this.registrarSubastaForm.get('titulo');
  }

  get tipoSubasta(){
    return this.registrarSubastaForm.get('tipoSubasta');
  }

  get modoSubasta(){
    return this.registrarSubastaForm.get('modoSubasta');
  }

  get fechaInicio(){
    return this.registrarSubastaForm.get('fechaInicio');
  }

  get fechaFin(){
    return this.registrarSubastaForm.get('fechaFin');
  }

  get horaInicio(){
    return this.registrarSubastaForm.get('horaInicio');
  }

  get horaFin(){
    return this.registrarSubastaForm.get('horaFin');
  }

  get moneda(){
    return this.registrarSubastaForm.get('moneda');
  }

  get precioMinimo(){
    return this.registrarSubastaForm.get('precioMinimo');
  }

  get precioBase(){
    return this.registrarSubastaForm.get('precioBase');
  }

  initForm() {
    this.registrarSubastaForm = this.fb.group({
      titulo: [''],
      tipoSubasta: [''],
      modoSubasta: [''],
      fechaInicio: [''],
      fechaFin: [''],
      horaInicio: [''],
      horaFin: [''],
      moneda: [''],
      precioMinimo: [''],
      precioBase: ['']
    })
  };


  submit(){

    // if(confirm('Está seguro de grabar?')){
    //   this.subastaService.crearSubasta(this.idProducto, this.registrarSubastaForm.value)
    //   .subscribe(data=>{

        



    //     /*
    //     this.nf.notification("success", {
    //       'title': 'Registro exitoso.',
    //       'description': 'Se ha registrado correctamente.'
    //     });*/
    //   });
    // }
  }

}
