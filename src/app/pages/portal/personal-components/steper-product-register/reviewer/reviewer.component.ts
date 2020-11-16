import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {

  previewFirstImage: any = '';
  imagenTemp: any;
  categoryTemp: any = '';
  summary: any = '';

  constructor(private productEmiter: ProductEmiterService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productEmiter.categorySubjectChanged$.subscribe(data => {
      this.categoryTemp = data;
    });
    this.productEmiter.filesSubjectChanged$.subscribe(data => {
      if (data) {
        this.previewFirstImage = data[0];
        let reader = new FileReader();
        let urlImgTemp = reader.readAsDataURL(this.previewFirstImage);
        reader.onloadend = () => {
          this.imagenTemp = reader.result;
        }
      }
    });
    this.productEmiter.descriptionSubjectChanged$.subscribe(data => {
      if (data) {
        this.summary = data[data.length - 1].resumen
      }
    });
    this.productEmiter.shippingSubjectChanged$.subscribe(data => {
      console.log("shipping", data);
    })
  }

  goToStart() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: '¿Está seguro que desea llenar los datos nuevamente?',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productEmiter.addDescription(null);
        this.productEmiter.addFile(null);
        this.productEmiter.addShiping(null);

        this.router.navigate(['seller/edit/category'])
      }
    });
  }

  goToSubmit() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: '¿Está seguro de enviar este producto a revision?',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //consumo de servicio
        //->primero foto
        //->luego datos
      }
    });
  }

  // updatePhoto(file: File, kind: string, id: String) {
  //   let formData = new FormData();
  //   formData.append('photo', file);
  //   return this.http.put(`${environment.api_base}/${this.api.upload}/${kind}/${id}`, formData, { headers: { 'x-token': localStorage.getItem('token') } });
  // }

}
