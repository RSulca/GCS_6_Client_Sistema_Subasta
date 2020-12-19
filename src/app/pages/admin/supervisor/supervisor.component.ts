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
  supervisor: Supervisor = new Supervisor();

  supervisores: Supervisor[];
  categorias: Categoria[];

  isReadonly: boolean;
  
  constructor(private fb: FormBuilder, private nf: NotifierService, private router:Router, private supervisorService:SupervisorService, private categoriaService:CategoriaService) {
    this.initForm();
   }

  ngOnInit(): void {
    this.listar();
    this.obtenerCategoria();
  }

  get email(){
    return this.registroSupervisorForm.get('email');
  }

  get password(){
    return this.registroSupervisorForm.get('password');
  }

  get name(){
    return this.registroSupervisorForm.get('name');
  }

  get lastname(){
    return this.registroSupervisorForm.get('lastname');
  }

  get dni(){
    return this.registroSupervisorForm.get('dni');
  }

  get category(){
    return this.registroSupervisorForm.get('category');
  }

  initForm() {
    this.registroSupervisorForm = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', Validators.compose([ Validators.required, Validators.pattern('[0-9]{8}')])],
      category: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  validaPasswordCondicional1(){
    this.isReadonly =true;
    this.password.setValidators(null);
    this.password.updateValueAndValidity();
  }

  validaPasswordCondicional2(){
    this.isReadonly =false;
    this.password.setValidators(Validators.required);
    this.password.updateValueAndValidity();
  }

  submit(){
    if(confirm('Está seguro de grabar?')){
      this.supervisorService.registrar(this.registroSupervisorForm.value)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Registro exitoso.',
          'description': 'Se ha registrado correctamente.'
        });
        this.listar();
        this.limpiar();
        this.validaPasswordCondicional2();
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
    this.validaPasswordCondicional1();
    this.registroSupervisorForm.patchValue({id: supervisor._id.toString(), email: supervisor.email.toString(), name: supervisor.name.toString(),
     lastname: supervisor.lastname.toString(), dni: supervisor.dni.toString(), category: supervisor.category.toString()})
  }

  inhabilitar(id: string){
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

  habilitar(id: string){
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
    this.registroSupervisorForm.patchValue({id: '', email: '', name: '', lastname: '', dni: '', category: '', password: ''});
  }

}
