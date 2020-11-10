import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/request/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  registroSupervisorForm: FormGroup;

  supervisor:Supervisor = {
    id:'',
    name:'',
    lastname:'',
    dni:'',
    email:'',
    password:'',
    category:''
  };

  supervisores: Supervisor[];

  constructor(private fb: FormBuilder, private router:Router, private supervisorService:SupervisorService) {
    this.initForm();
   }

  ngOnInit(): void {
    this.listar();
  }

  initForm() {
    this.registroSupervisorForm = this.fb.group({
      id: [''],
      correo: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  registrar(){
    if(confirm('Está seguro de grabar?')){
      console.log(this.supervisor);
      this.supervisorService.registrar(this.supervisor)
      .subscribe(data=>{
        this.listar();
        this.limpiar();
      })
    }
  }

  listar(){
    this.supervisorService.listar()
      .subscribe(data => {
        this.supervisores = data['user'];
        console.log(this.supervisores);
      })
  }

  actualizar(supervisor: Supervisor){
    console.log(supervisor._id.toString());
    localStorage.setItem("_id", supervisor._id.toString());
    localStorage.setItem("name", supervisor.name.toString());
    localStorage.setItem("lastname", supervisor.lastname.toString());
    localStorage.setItem("email", supervisor.email.toString());
    localStorage.setItem("dni", supervisor.dni.toString());
    localStorage.setItem("category", supervisor.category.toString());

    this.registroSupervisorForm.patchValue({id: localStorage.getItem('_id'), correo: localStorage.getItem('email'), nombres: localStorage.getItem('name'), apellidos: localStorage.getItem('lastname'), dni: localStorage.getItem('dni'), categoria: localStorage.getItem('category')})
  }

  limpiar(){
    this.registroSupervisorForm.setValue({id: '', correo: '', nombres: '', apellidos: '', dni: '', categoria: '', password: ''});
  }

}
