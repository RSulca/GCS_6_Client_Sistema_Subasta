import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/request/supervisor.model';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DatePipe } from 'src/app/util/dateFormatPipe';

@Component({
  selector: 'app-supervisor-perfil',
  templateUrl: './supervisor-perfil.component.html',
  styleUrls: ['./supervisor-perfil.component.css']
})
export class SupervisorPerfilComponent implements OnInit {

  actualizaSupervisorForm: FormGroup;
  supervisor: Supervisor = new Supervisor();

  isReadonly: boolean;

  constructor(private fb: FormBuilder, private nf: NotifierService, private router:Router, private supervisorService:SupervisorService, private ls: LocalStorageService, private datePipe: DatePipe) {
    this.initForm();
   }

  ngOnInit(): void {
    let usuario = JSON.parse(this.ls.getData('user'));
    this.obtener(usuario._id);
    this.isReadonly = true;
  }

  get email(){
    return this.actualizaSupervisorForm.get('email');
  }

  get password(){
    return this.actualizaSupervisorForm.get('password');
  }

  get cpassword(){
    return this.actualizaSupervisorForm.get('cpassword');
  }

  get name(){
    return this.actualizaSupervisorForm.get('name');
  }

  get lastname(){
    return this.actualizaSupervisorForm.get('lastname');
  }

  get dni(){
    return this.actualizaSupervisorForm.get('dni');
  }

  get category(){
    return this.actualizaSupervisorForm.get('category');
  }

  get address(){
    return this.actualizaSupervisorForm.get('address');
  }

  get bornDate(){
    return this.actualizaSupervisorForm.get('bornDate');
  }

  get phoneNumber(){
    return this.actualizaSupervisorForm.get('phoneNumber');
  }

  get college(){
    return this.actualizaSupervisorForm.get('college');
  }

  get studies(){
    return this.actualizaSupervisorForm.get('studies');
  }

  initForm() {
    this.actualizaSupervisorForm = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bornDate: ['', [Validators.required]],
      phoneNumber: ['', Validators.compose([ Validators.required, Validators.pattern('[0-9]{9}')])],
      college: ['', [Validators.required]],
      studies: ['', [Validators.required]],
      password: [''],
      cpassword: ['']
    })
  };

  obtener(id: string){
    this.supervisorService.obtener(id)
      .subscribe(data => {
        this.actualizaSupervisorForm.patchValue({id: data['user']._id, email: data['user'].email,
         name: data['user'].name, lastname: data['user'].lastname, dni: data['user'].dni,
         address: data['user'].address, bornDate: this.datePipe.transform(data['user'].bornDate),
         phoneNumber: data['user'].phoneNumber, college: data['user'].college, studies: data['user'].studies});
      })
  }

  submit(){
    if(confirm('Está seguro de grabar?')){
      this.supervisorService.registrar(this.actualizaSupervisorForm.value)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Registro exitoso.',
          'description': 'Se ha registrado correctamente.'
        });
      });
    }
  }

  
  confirmaPassword(){
    if(true){
      console.log('hola');
      this.password.setValidators(Validators.required);
      this.cpassword.setValidators(Validators.required);
      this.password.updateValueAndValidity();
      this.cpassword.updateValueAndValidity();
    }else{
      console.log('adios');
      this.password.setValidators(null);
      this.cpassword.setValidators(null);
      this.password.updateValueAndValidity();
      this.cpassword.updateValueAndValidity();
    }
    
  }

}
