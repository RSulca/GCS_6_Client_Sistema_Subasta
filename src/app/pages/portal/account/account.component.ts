import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ubigeo } from 'src/app/models/request/ubigeo.model';
import { User } from 'src/app/models/request/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { UserEmiterService } from 'src/app/services/user-emiter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: any = {};

  basicForm: FormGroup = new FormGroup({});
  ubigeoForm: any = {};
  cardForm: any = {};
  file: File;

  request: User = new User();

  constructor(private userInfoEmitter: UserEmiterService, private loginService: LoginService,
    private nf: NotifierService, private userService: UserService, private router: Router, private ls: LocalStorageService) { }

  ngOnInit(): void {
    this.getDataFromEmitter();

  }

  getDataFromEmitter() {
    this.userInfoEmitter.accountSubjectChanged$.subscribe(data => {
      this.basicForm = data;
    })

    this.userInfoEmitter.filesSubjectChanged$.subscribe(data => {
      this.file = data;
    })

    this.userInfoEmitter.ubigeoSubjectChanged$.subscribe(data => {
      this.ubigeoForm = data;
    })

    this.userInfoEmitter.cardSubjectChanged$.subscribe(data => {
      this.cardForm = data;
    })
  }

  saveData() {
    if (this.basicForm.valid) {
      this.populateData(this.basicForm.value, this.file, this.ubigeoForm, this.cardForm);
      this.userService.editUser(this.request, this.loginService.usuario._id).subscribe(data => {
        this.ls.setData('user', JSON.stringify(data.user))
        this.loginService.usuario = data.user;
        this.router.navigate(['account/account-profile'])
        this.nf.notification("success", {
          'title': 'Datos actualizados.',
          'description': 'Sus datos han sido actualizados correctamente.'
        });
      })
    } else {
      this.nf.notification("warning", {
        'title': 'Formulario invalido.',
        'description': 'Por complete todos los campos requeridos.'
      });
    }
  }

  reload() {
    this.router.navigate(['account/account-profile'])
  }


  populateData(dataBasic, dataFile, dataUbigeo, dataCard) {
    this.request.name = dataBasic.name;
    this.request.lastname = dataBasic.lastname;
    this.request.dni = dataBasic.dni;
    this.request.img = dataFile;
    this.request.card = dataCard.card;
    this.request.bornDate = dataBasic.bornDate;
    this.request.phoneNumber = dataBasic.phone;
    this.request.ubigeo = new Ubigeo(dataUbigeo.department, dataUbigeo.province, dataUbigeo.district, dataUbigeo.direction);
    console.log(this.request);
  }
}
