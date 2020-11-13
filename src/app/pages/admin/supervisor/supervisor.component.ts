import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/request/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { Categoria } from 'src/app/models/request/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

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
  categorias: Categoria[];

  constructor(private fb: FormBuilder, private nf: NotifierService, private router:Router, private supervisorService:SupervisorService, private categoriaService:CategoriaService) {
    this.initForm();
   }

  ngOnInit(): void {
    this.listar();
    this.obtenerCategoria();
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
      this.supervisorService.registrar(this.supervisor)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Registro exitoso.',
          'description': 'Se ha registrado correctamente.'
        });
        this.listar();
        this.limpiar();
      })
    }
  }

  listar(){
    this.supervisorService.listar()
      .subscribe(data => {
        this.supervisores = data['user'];
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

  inhabilitar(id: number){
    if(confirm('Está seguro de inhabilitar?')){
      this.supervisorService.inhabilitar(id)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Eliminación exitosa.',
          'description': 'Se ha deshabilitado correctamente.'
        });
        this.listar();
      })
    } 
  }

  habilitar(id: number){
    if(confirm('Está seguro de habilitar?')){
      this.supervisorService.habilitar(id)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Habilitación exitosa.',
          'description': 'Se ha habilitado correctamente.'
        });
        this.listar();
      })
    } 
  }

  obtenerCategoria(){
    this.categoriaService.obtenerCategoria()
      .subscribe(data => {
        this.categorias = data['categories'];
      })
  }

  limpiar(){
    console.log(this);
    this.registroSupervisorForm.setValue({id: '', correo: '', nombres: '', apellidos: '', dni: '', categoria: '', password: ''});
  }

}
