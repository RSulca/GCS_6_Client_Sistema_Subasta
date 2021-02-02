import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-report-amount',
  templateUrl: './report-amount.component.html',
  styleUrls: ['./report-amount.component.css']
})
export class ReportAmountComponent implements OnInit {
  formReporte: FormGroup;
  enableSpinner: boolean = false;
  noExistData: boolean = false;
  displayedColumns: string[] = ['position', 'title', 'mode', 'type', 'base_price', 'price_paid'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  subastas = [];
  total: number = 0;
  firstSearch: boolean = true;

  constructor(private fb: FormBuilder, private reporteService: ReporteService) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get fechaInicioNoValido() {
    let band = this.formReporte.get('fechaInicio').invalid && this.formReporte.get('fechaInicio').touched;
    if (this.formReporte.get('fechaInicio').value != '' && this.formReporte.get('fechaFin').value != '') {
      band = this.formReporte.get('fechaInicio').value > this.formReporte.get('fechaFin').value;
    }
    return band;
  }

  get fechaFinNoValido() {
    let band = this.formReporte.get('fechaFin').invalid && this.formReporte.get('fechaFin').touched;
    return band;
  }

  crearFormulario() {
    this.formReporte = this.fb.group({
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]]
    });
  }

  mostrarTabla(): void {
    if (this.formReporte.invalid) {
      return Object.values(this.formReporte.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.enableSpinner = true;
    let fechaInicio = this.formReporte.value.fechaInicio;
    let fechaFin = this.formReporte.value.fechaFin;
    this.obtenerVentas(fechaInicio, fechaFin);
  }

  obtenerVentas(fechaInicio: string, fechaFin: string): void {
    this.enableSpinner = true;
    this.firstSearch = false;
    this.reporteService.getAuctionXDate(fechaInicio, fechaFin).subscribe((data: any) => {
      this.enableSpinner = false;
      let elementos = [];
      data.data.forEach((el, index) => {
        elementos.push({
          position: index + 1,
          title: el.titulo,
          mode: el.modo == 'SINC' ? 'SÍNCRONO':'ASÍNCRONO',
          type: el.tipo,
          base_price: el.precio_base,
          price_paid: el.precio_pagado
        });
        this.total += el.precio_pagado;
      });
      this.dataSource.data = elementos;
      this.subastas = elementos;
    })
  }


}
