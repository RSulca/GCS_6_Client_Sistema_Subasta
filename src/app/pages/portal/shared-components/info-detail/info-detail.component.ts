import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SubastaService } from 'src/app/services/subasta.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { PujaTemporal } from 'src/app/models/request/pujaTemporal.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmDialogComponent } from 'src/app/pages/portal/personal-components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  @Input() endAuction: any;
  @Input() endDay: any;
  @Input() typeUser: string;
  @Input() idSubasta: string;
  @Input() precioBase: number;
  @Input() precioBaseTemporal: number;

  pujaForm: FormGroup;
  usuario: any;
  nombre: string;
  dia: string;
  hora: string;
  monto: number;
  arrayPujas: PujaTemporal[] = [];
  pujaTemporal: PujaTemporal;
  pujaActualTemporal: number;
  compradorTemporal: string;
  precioActualTemporal: number;
  idComprador: string;
  modalRef: BsModalRef;
  compradorSubasta: string;
  productoSubasta: string;
  precioPagadoSubasta: number;

  constructor(private fb: FormBuilder, private subastaService: SubastaService, private ls: LocalStorageService, private webSocketService: WebSocketService, private router: Router, private modalService: BsModalService, public dialog: MatDialog) {
    this.initForm();
   }

  ngOnInit(): void {
    this.obtenerPujasSubasta();
    this.usuario = JSON.parse(this.ls.getData('user'));
    this.webSocketService.listen(this.idSubasta).subscribe((data)=>{
      console.log(data)
      if(data['mensaje'] === 'proceso'){
        this.precioActualTemporal = this.precioBaseTemporal;
          this.nombre = data['user'].name;
          this.idComprador = data['user']._id;
          this.dia = data['data'].dia;
          this.hora = data['data'].hora;
          this.monto = data['data'].monto;
          this.pujaActualTemporal = this.monto;
          this.compradorTemporal = this.nombre;
          this.pujaTemporal = {
            name : this.nombre,
            dia : this.dia,
            hora : this.hora,
            monto : this.monto
          }
          this.arrayPujas.push(this.pujaTemporal);

          this.precioActualTemporal = this.monto + this.precioActualTemporal;
          this.precioBaseTemporal = this.precioActualTemporal;
      }else{
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '400px',
          data: `SUBASTA FINALIZADA.El compradador ${data['name']} pago el monto de: ${data['precio']}`,
        });
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['/history']);
        });
    }
    })
  }

  get valorPuja(){
    return this.pujaForm.get('valorPuja');
  }

  initForm() {
    this.pujaForm = this.fb.group({
      valorPuja : ['', [Validators.required]],
    })
  }

  obtenerPujasSubasta(){
    this.subastaService.obtenerPujasSubasta(this.idSubasta).subscribe((data: any) => {
      this.arrayPujas = data['pujas'];
     console.log(data['pujas']);
    })
  }


  puja50(){
    const monto = 50;
    this.subastaService.pujar(this.idSubasta, monto).subscribe((data: any) => {
    })
  }

  puja55(){
    const monto = 55;
    this.subastaService.pujar(this.idSubasta, monto).subscribe((data: any) => {
    })
  }

  puja60(){
    const monto = 60;
    this.subastaService.pujar(this.idSubasta, monto).subscribe((data: any) => {
    })
  }

  pujaDirecta(){
    this.subastaService.pujar(this.idSubasta, this.pujaForm.get('valorPuja').value).subscribe((data: any) => {
    })
  }

  finalizar(){
    if(confirm('¿Está seguro de terminar la subasta?')){
      this.subastaService.finalizarSubasta(this.idSubasta, this.pujaActualTemporal, this.idComprador)
      .subscribe((data: any) =>{
        
      })
    }
  }

}
