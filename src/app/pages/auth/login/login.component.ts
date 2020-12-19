import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientReq } from 'src/app/models/request/client.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';
import { NotifierService } from 'src/app/services/notifier.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  process: boolean = false;
  clientRequest: ClientReq = new ClientReq();
  email: string = '';

  //google
  auth2: any;

  constructor(private fb: FormBuilder, private nf: NotifierService,
    private loginService: LoginService, private router: Router, private ls: LocalStorageService) {
    this.initForm();
  }

  ngOnInit() {
    this.getEmail();
    this.googleInit();

  }
  ngOnDestroy() {
  }


  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '482237752331-q1kj00gbilrg5bjvkdumlnc40pjntkt9.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });

      this.attachSignin(document.getElementById('btnGoogle'))
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      this.process = true;
      let token = googleUser.getAuthResponse().id_token;
      this.loginService.loginGoogle(token).subscribe((data: any) => {
        this.process = false;
        this.router.navigate(['/home']);
        this.nf.notification("success", {
          'title': `Bienvenido ${data.user.name}`
        });
      }, e => {
        this.nf.notification("error2", {
          'title': `Error `,
          'description': e
        });
      })
    });
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false, [Validators.required]]
    });
  }

  login(event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.process = true;
      this.populateRequest();
      this.loginService.login(this.clientRequest, this.loginForm.controls['remember'].value).subscribe((data: any) => {
        this.process = false;
        this.authenticateUser(data.role);
        this.nf.notification("success", {
          'title': `Bienvenido ${data.user.name}`
        });
      }, e => {
        this.process = false;
        this.nf.notification("error2", {
          'title': `Error `,
          'description': e.message
        });
      });
    }

  }

  populateRequest() {
    this.clientRequest.email = this.loginForm.controls['email'].value;
    this.clientRequest.password = this.loginForm.controls['password'].value;
  }

  getEmail() {
    this.email = this.ls.getData('email') || '';
    if (this.email.length > 1) {
      this.loginForm.get('remember').setValue(true);
    }
    this.loginForm.get('email').setValue(this.email);
  }

  authenticateUser(rol: string) {
    if (rol == 'ADMIN_ROLE') {
      this.router.navigate(['/admin']);
    } else if (rol == 'SUPERVISOR_ROLE') {
      this.router.navigate(['/supervisor'])
    } else if (rol == 'CLIENT_ROLE') {
      this.router.navigate(['/home'])
    }
  }



}
