import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/request/producto.model';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';
import { ProductoService } from 'src/app/services/producto.service';
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
  files: File[] = [];
  dataFormProduct: any;
  shippingData: any;
  nameProduct: any;

  request: Producto = new Producto();

  constructor(private productEmiter: ProductEmiterService, private router: Router, public dialog: MatDialog,
    private productoService: ProductoService, private nf: NotifierService) { }

  ngOnInit(): void {
    this.productEmiter.categorySubjectChanged$.subscribe(data => {
      this.categoryTemp = data;
    });
    this.productEmiter.filesSubjectChanged$.subscribe(data => {
      this.files = data;
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
        this.dataFormProduct = data;
        this.summary = data[data.length - 1].resumen
        this.nameProduct = data[0];
      }
    });
    this.productEmiter.shippingSubjectChanged$.subscribe(data => {
      if (data) {
        this.shippingData = data;
      }
    })
  }

  goToStart() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: '¿Está seguro que desea llenar los datos nuevamente?',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
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
        this.pupulateData();
        this.productoService.saveProduct(this.request, this.files).subscribe(data => {
          this.router.navigate(['/home'])
          this.nf.notification("success", {
            'title': 'Producto enviado con exito.',
            'description': 'Su producto fue enviado a revision. Para consultar el estado de su producto puede ir al modulo de productos enviados a revision.'
          });
        })
      }
    });
  }

  pupulateData() {
    this.dataFormProduct.push({
      "shipping": {
        "recoger": this.shippingData.recoger,
        "pagaEnvio": this.shippingData.dataShipping
      }
    })
    this.request.category = this.categoryTemp;
    this.request.description = JSON.stringify(this.dataFormProduct);
    this.request.name = this.nameProduct.nombreProducto;
    console.log(this.request);
  }

}
