import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/request/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  nombres: string;
  apellidos: string;
  categoria: string;
  universidad: string;
  estudios: string;
  img: string;

  supervisor:Supervisor = {
    id:'',
    name:'',
    lastname:'',
    dni:'',
    email:'',
    password:'',
    category:''
  };


  constructor(private nf: NotifierService, private router:Router, private supervisorService:SupervisorService, private ls: LocalStorageService) { }

  ngOnInit(): void {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtener(usuario._id);
  }

  obtener(id: string){
    this.supervisorService.obtener(id)
      .subscribe(data => {
        this.nombres = data['user'].name;
        this.apellidos = data['user'].lastname;
        this.categoria = data['user'].category;
        this.universidad = data['user'].college;
        this.estudios = data['user'].studies;
        this.img = data['user'].img;
      })
  }

}
