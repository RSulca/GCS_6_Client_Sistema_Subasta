import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Chart from 'chart.js';
import { ReporteService } from 'src/app/services/reporte.service';
//import { dateLimitValidator } from 'src/app/shared/date-limit.directive';

@Component({
  selector: 'app-supervisor-producto-reporte',
  templateUrl: './supervisor-producto-reporte.component.html',
  styleUrls: ['./supervisor-producto-reporte.component.css']
})
export class SupervisorProductoReporteComponent implements AfterViewInit {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  formReporte: FormGroup;
  //fechaActual: Date = new Date();
  enableSpinner: boolean = false;
  noExistData: boolean = false;

  constructor(private fb: FormBuilder, private reporteService: ReporteService) {
    this.crearFormulario();
  }

  ngAfterViewInit(): void {
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

  mostrarGrafico(): void {
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
    this.reporteService.productosXfechaSupervisor(fechaInicio, fechaFin).subscribe(data => {
      this.enableSpinner = false;
      this.doughnutChartMethod(data);
    });
  }

  doughnutChartMethod(data) {
    let creado = 0, enProceso = 0, suspendido = 0, finalizado = 0;
    data.data.forEach(element => {
      switch (element.estado) {
        case 'CREADO':
          creado++;
          break;
        case 'EN PROCESO':
          enProceso++;
          break;
        case 'SUSPENDIDO':
          suspendido++;
          break;
        case 'FINALIZADO':
          finalizado++;
          break;
      }
    });

    if((creado+enProceso+suspendido+finalizado) == 0){
      this.noExistData = true;
    }else{
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['CREADO', 'EN PROCESO', 'SUSPENDIDO', 'FINALIZADO'],
          datasets: [{
            label: '# of Votes',
            data: [creado, enProceso, suspendido, finalizado],
            backgroundColor: [
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)'
            ],
            hoverBackgroundColor: [
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }]
        },
        options: {
          legend: {
            display: true,
            labels: {
              fontColor: 'rgb(0, 0, 0)'
            },
            position: 'right'
          }
        }
      });
    }
  }

}