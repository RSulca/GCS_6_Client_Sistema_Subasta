import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/request/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-supervisor-perfil',
  templateUrl: './supervisor-perfil.component.html',
  styleUrls: ['./supervisor-perfil.component.css']
})
export class SupervisorPerfilComponent implements OnInit {

  actualizaSupervisorForm: FormGroup;

  supervisor:Supervisor = {
    id:'',
    name:'',
    lastname:'',
    dni:'',
    email:'',
    password:''
  };
  
  constructor(private fb: FormBuilder, private nf: NotifierService, private router:Router, private supervisorService:SupervisorService, private ls: LocalStorageService) {
    this.initForm();
   }

  ngOnInit(): void {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtener(usuario._id);
  }

  initForm() {
    this.actualizaSupervisorForm = this.fb.group({
      id: [''],
      correo: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  obtener(id: string){
    this.supervisorService.obtener(id)
      .subscribe(data => {
        this.actualizaSupervisorForm.patchValue({id: data['user']._id, correo: data['user'].email, nombres: data['user'].name, apellidos: data['user'].lastname, dni: data['user'].dni});
      })
  }

  actualizar(){
    console.log(this.supervisor);
    if(confirm('Está seguro de grabar?')){
      this.supervisorService.registrar(this.supervisor)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Registro exitoso.',
          'description': 'Se ha registrado correctamente.'
        });
      });
    }
  }




  limpiar(){
    this.actualizaSupervisorForm.setValue({id: '', correo: '', nombres: '', apellidos: '', dni: '', password: ''});
  }

}
