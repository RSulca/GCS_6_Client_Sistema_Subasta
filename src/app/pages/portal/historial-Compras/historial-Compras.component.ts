import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SubastaService } from 'src/app/services/subasta.service';

@Component({
  selector: 'app-historial-Compras',
  templateUrl: './historial-Compras.component.html',
  styleUrls: ['./historial-Compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  calificarSubastaForm: FormGroup;

  compras: any[] = [];
  estrellas: number[];
  c: number = 1;
  modalRef: BsModalRef;
  subastaCalificar: any;

  constructor(private fb: FormBuilder, private subastaService: SubastaService, private modalService: BsModalService, private ls: LocalStorageService) {
    this.initForm();
   }

  ngOnInit(): void {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtenerCompras(usuario._id);
  }

  get valorCalificacion(){
    return this.calificarSubastaForm.get('valorCalificacion');
  }

  get mensajeCalificacion(){
    return this.calificarSubastaForm.get('mensajeCalificacion');
  }

  initForm() {
    this.calificarSubastaForm = this.fb.group({
      valorCalificacion : ['', [Validators.required]],
      mensajeCalificacion : ['', [Validators.required]]
    })
  }

  obtenerCompras(idComprador: string){
    this.subastaService.listarHistorialCompras(idComprador).subscribe((data: any) => {
      this.compras = data['subastas'];
    })
  }

  openModal(template: TemplateRef<any>, subasta:any) {
    this.modalRef = this.modalService.show(template);
    this.subastaCalificar=subasta;
  }

  submit(){
    if(confirm('Está seguro de calificar?')){
      this.subastaService.calificarSubasta(this.subastaCalificar._id, this.calificarSubastaForm.get('valorCalificacion').value, this.calificarSubastaForm.get('mensajeCalificacion').value).subscribe((data: any) => {
        this.modalRef.hide();
        this.estrellas = Array(data['subasta'].calificacion);
      })
    }
  }

 convierteArray = (cantidad: number): Array<number> => {
    return Array(cantidad);
  }

}
