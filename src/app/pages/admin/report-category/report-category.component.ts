import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-report-category',
  templateUrl: './report-category.component.html',
  styleUrls: ['./report-category.component.css']
})
export class ReportCategoryComponent implements AfterViewInit, OnInit {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  enableSpinner: boolean = false;

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.getDataCategories();
  }

  ngAfterViewInit(): void {
  }

  getDataCategories(): void {
    this.enableSpinner = true;
    this.reporteService.getCountXCategories().subscribe(data => {
      console.log(data);
      this.barChartMethod(data);
    });
  }

  backgroundRandom() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
  }

  barChartMethod(data) {
    let categorias = [];
    let cantidades = [];
    let fondos = [];
    data.data.forEach(element => {
      categorias.push(element.nombre);
      cantidades.push(element.total);
      fondos.push(this.backgroundRandom());
    });
    this.enableSpinner = false;
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: categorias,
        datasets: [{
          label: 'Productos por Categoría',
          data: cantidades,
          backgroundColor: fondos
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              suggestedMin: 0,
              suggestedMax: 50
            }
          }]
        }
      }
    });
  }
}
