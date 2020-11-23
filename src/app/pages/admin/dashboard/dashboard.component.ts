import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

// core components


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  nombres: string;
  apellidos: string;
  universidad: string;
  estudios: string;
  img: string;

  constructor(private router:Router, private adminService:AdminService, private ls: LocalStorageService) { }

  ngOnInit() {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtener(usuario._id);
    // this.datasets = [
    //   [0, 20, 10, 30, 15, 40, 20, 60, 60],
    //   [0, 20, 5, 25, 10, 30, 15, 40, 40]
    // ];
    // this.data = this.datasets[0];


    // var chartOrders = document.getElementById('chart-orders');

    // parseOptions(Chart, chartOptions());


    // var ordersChart = new Chart(chartOrders, {
    //   type: 'bar',
    //   options: chartExample2.options,
    //   data: chartExample2.data
    // });

    // var chartSales = document.getElementById('chart-sales');

    // this.salesChart = new Chart(chartSales, {
		// 	type: 'line',
		// 	options: chartExample1.options,
		// 	data: chartExample1.data
		// });
  }

  obtener(id: string){
    console.log(id);
    this.adminService.obtener(id)
      .subscribe(data => {
        this.nombres = data['user'].name;
        this.apellidos = data['user'].lastname;
        this.universidad = data['user'].college;
        this.estudios = data['user'].studies;
        this.img = data['user'].img;
      })
  }


  // public updateOptions() {
  //   this.salesChart.data.datasets[0].data = this.data;
  //   this.salesChart.update();
  // }

}
