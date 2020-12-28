import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, AfterViewInit {

  files: File[] = [];
  modalRef: BsModalRef;
  filesString:string[]=[];
  localData:any;

  constructor(private router: Router,private modalService: BsModalService, private productEmiter: ProductEmiterService, private nf: NotifierService) { }

  ngOnInit(): void {
    this.localData=localStorage.getItem('productoMod');
    if(this.localData){
      this.productEmiter.filesSubjectChanged$.subscribe(data=>{
        this.filesString=data;
      });
      
    }
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  goToDataWithoutFiles(){
    this.router.navigate(['seller/edit/data']);
    this.files=[];
    this.productEmiter.addFile(this.files);
    this.modalRef.hide();
  }
}
