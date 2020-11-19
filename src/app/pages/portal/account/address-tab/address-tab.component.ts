import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserEmiterService } from 'src/app/services/user-emiter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.css']
})
export class AddressTabComponent implements OnInit {

  ubigeoForm: FormGroup;
  user: any = {};

  constructor(private userInfoEmitter: UserEmiterService, private loginService: LoginService, private fb: FormBuilder,
     private router: Router, private userService: UserService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getUser(this.loginService.usuario._id);
  }

  getUser(id) {
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data.user;
      this.ubigeoForm.patchValue({
        department: this.user.ubigeo.department,//probar
        province: this.user.ubigeo.province,//probar
        district: this.user.ubigeo.district,//probar
        direction: this.user.ubigeo.direction,//probar
      })
    })
  }

  initForm() {
    this.ubigeoForm = this.fb.group({
      department: ['', [Validators.required]],
      province: ['', [Validators.required]],
      district: ['', [Validators.required]],
      direction: ['', [Validators.required]],
    });
  }

  goToCard() {
    this.userInfoEmitter.addUbigeoInformation(this.ubigeoForm.value);
    this.router.navigate(['account/payment'])
  }
}
