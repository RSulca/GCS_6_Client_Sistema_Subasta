import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserEmiterService } from 'src/app/services/user-emiter.service';
import { UserService } from 'src/app/services/user.service';
interface ErrorValidate {
  [s: string]: boolean;
}
@Component({
  selector: 'app-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.css'],
  providers: [DatePipe]

})
export class AccountTabComponent implements OnInit {

  user: any = {};
  basicForm: FormGroup;


  constructor(private userService: UserService, public loginService: LoginService, private datePipe: DatePipe,
    private userInfoEmitter: UserEmiterService, private fb: FormBuilder, private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getUser(this.loginService.usuario._id);
  }

  getUser(id) {
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data.user;
      const datePipe = this.datePipe.transform(this.user.bornDate, 'yyyy-MM-dd')
      this.basicForm.patchValue({
        name: this.user.name,
        lastname: this.user.lastname,
        dni: this.user.dni,
        password: this.user.password,
        phone: this.user.phoneNumber,
        bornDate: datePipe,
        email: this.user.email,
      })
    })
  }
  validarTelefono(evento: any) {
    /* evento.value = evento.value.replace(/[^0-9]/g, ""); */
    if (evento.charCode >= 48 && evento.charCode <= 57) {
      return true;
    }
    return false;
  }
  
  validarCampo(control: FormControl): ErrorValidate {
    if (control.value?.trim() === "") {
      return {
        validarCampo: true,
      };
    }

    return null;
  }
  initForm() {
    this.basicForm = this.fb.group({
      name: ['', [Validators.required, this.validarCampo]],
      lastname: ['', [Validators.required, this.validarCampo]],
      dni: ['', []],
      password: ['', [Validators.required]],
      phone: ['', []],
      bornDate: ['', []],
      email: ['', [Validators.required, Validators.email]],

    });
    this.basicForm.valueChanges.subscribe(data => {
      this.userInfoEmitter.addAccountInformation(this.basicForm);
    })
  }

  goToPhoto() {
    this.userInfoEmitter.addAccountInformation(this.basicForm);
    this.router.navigate(['account/img-profile'])
  }
}
