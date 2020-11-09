import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/request/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  supervisor:Supervisor = {
    name:'',
    lastname:'',
    dni:'',
    email:'',
    password:'',
    category:''
  };

  constructor(private router:Router, private supervisorService:SupervisorService) { }

  ngOnInit(): void {
  }

  registrar(){
    this.supervisorService.registrar(this.supervisor)
    .subscribe(data=>{
      console.log('grabado');
    })
  }

}
