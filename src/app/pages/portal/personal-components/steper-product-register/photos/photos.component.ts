import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, AfterViewInit {

  files: File[] = [];

  constructor(private router: Router, private productEmiter: ProductEmiterService, private nf: NotifierService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  goToData() {
    if (this.files.length < 3) {
      this.nf.notification("warning", {
        'title': 'Formulario invalido.',
        'description': 'Por favor seleccione almenos 3 fotos de su producto.'
      });
    } else {
      this.productEmiter.addFile(this.files);
      this.router.navigate(['seller/edit/data'])
    }
  }


  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
