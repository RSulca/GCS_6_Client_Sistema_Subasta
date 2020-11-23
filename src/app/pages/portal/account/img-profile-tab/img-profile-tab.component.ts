import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { UserEmiterService } from 'src/app/services/user-emiter.service';

@Component({
  selector: 'app-img-profile-tab',
  templateUrl: './img-profile-tab.component.html',
  styleUrls: ['./img-profile-tab.component.css']
})
export class ImgProfileTabComponent implements OnInit {

  imagenTemp: string = '';
  imagenSubir: File;

  constructor(private nf: NotifierService, public loginService: LoginService,
    private userInfoEmitter: UserEmiterService,private router:Router) { }

  ngOnInit(): void {
  }

  seleccionImage(file: File) {
    if (!file) {
      this.imagenSubir = null;
      return;
    }
    if (file.type.indexOf('image') < 0) {
      this.nf.notification("warning", {
        'title': 'Archivo invalido.',
        'description': 'Por favor sube una imagen valida.'
      });
      return;
    }
    this.imagenSubir = file;

    let reader = new FileReader();
    let urlImageTemp = reader.readAsDataURL(file);

    reader.onloadend = () => this.imagenTemp = reader.result as string;

  }

  goToUbigeo() {
    this.userInfoEmitter.addFile(this.imagenSubir);
    this.router.navigate(['account/address'])
  }

}
