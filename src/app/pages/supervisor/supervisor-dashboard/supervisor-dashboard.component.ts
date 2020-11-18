import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/request/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  nombres: string;
  apellidos: string;
  categoria: string;

  supervisor:Supervisor = {
    id:'',
    name:'',
    lastname:'',
    dni:'',
    email:'',
    password:'',
    category:''
  };


  constructor(private nf: NotifierService, private router:Router, private supervisorService:SupervisorService) { }

  ngOnInit(): void {
    this.obtener('5fada9b9d2a3d857c483cdf9');
  }

  obtener(id: string){
    console.log(id);
    this.supervisorService.obtener(id)
      .subscribe(data => {
        console.log(data['user']);
        this.nombres = data['user'].name;
        this.apellidos = data['user'].lastname;
        this.categoria = data['user'].category;
      })
  }

}
