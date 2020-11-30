import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ubigeo } from 'src/app/models/request/ubigeo.model';
import { LoginService } from 'src/app/services/login.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';
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

  //ubigeo
  departaments: any[] = [];
  provinces: any[] = [];
  disctrits: any[] = [];

  constructor(private userInfoEmitter: UserEmiterService, private loginService: LoginService, private fb: FormBuilder,
    private router: Router, private userService: UserService, private ubigeoService: UbigeoService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getUser(this.loginService.usuario._id);
    this.getDepartaments(this.user.ubigeo);
    this.getProvince(15, this.user.ubigeo);
  }

  getUser(id) {
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data.user;
      console.log(this.user)
      this.getDepartaments(this.user.ubigeo);
      this.getProvince(15, this.user.ubigeo);
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

  getDepartaments(userUbigeo: Ubigeo) {
    this.ubigeoService.getDepartment().subscribe((data: any) => {
      this.departaments = data.departaments;
      if (userUbigeo) {
        this.f.department.setValue(this.departaments.find(dep => dep.departamento === userUbigeo.department))
      } else {
        this.f.department.setValue(this.departaments.find(dep => dep.departamento === '15'))
      }
    })
  }

  getProvince(idDepartment, userUbigeo: Ubigeo) {
    this.ubigeoService.getProvince(idDepartment).subscribe((data: any) => {
      this.provinces = data.province;
      if (userUbigeo) {
        this.f.province.setValue(this.provinces.find(prov => prov.provincia === userUbigeo.province))
      } else {
        this.f.province.setValue(this.provinces.find(prov => prov.provincia === '01'))
      }
      this.getDisctrit(idDepartment, this.f.province.value.provincia, userUbigeo);
    })
  }

  getDisctrit(idDepartment, idProvince, userUbigeo: Ubigeo) {
    this.ubigeoService.getDistrict(idDepartment, idProvince).subscribe((data: any) => {
      this.disctrits = data.disctrit;
      if (userUbigeo) {
        this.f.district.setValue(this.disctrits.find(dis => dis.distrito === userUbigeo.district))
      } else {
        this.f.district.setValue(this.disctrits.find(dis => dis.distrito === '01'))
      }
    })
  }

  get f() { return this.ubigeoForm.controls; };

  changeDepartamento() {

    this.getProvince(this.f.department.value.departamento, this.user.ubigeo);
  }
  changeProvincia() {
    this.getDisctrit(this.f.department.value.departamento, this.f.province.value.provincia, this.user.ubigeo);
  }
}
