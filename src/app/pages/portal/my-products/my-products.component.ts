import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductoService } from 'src/app/services/producto.service';
import { SubastaService } from 'src/app/services/subasta.service';
import { ConfirmDialogComponent } from '../personal-components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  product: any = {};
  auctionForm: FormGroup;
  seller: any = {};
  holandesa: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, public dialog: MatDialog,
    private productService: ProductoService, private nf: NotifierService, private auctionService: SubastaService) {
    this.initForm();
    this.getSeller();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      const idProducto = data['idProducto']; 

      this.productService.obtenerProducto(idProducto).subscribe((data: any) => {
        this.product = data.product;
      });
    });
  }

  initForm() {
    this.auctionForm = this.fb.group({
      titulo: ['', [Validators.required]],
      moneda: ['', [Validators.required]],
      modo: ['', [Validators.required]],
      precio_minimo: [null, []],
      tipo: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],
      precio_base: [null, [Validators.required]]
    });

    this.auctionForm.valueChanges.subscribe(data => {
      if (data['tipo'] == 'HOLANDESA') {
        this.holandesa = true;
      } else {
        this.holandesa = false;
      }
    })
  }

  createAuction() {
    if (this.auctionForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: '¿Esta seguro de proceder con la subasta?',
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.auctionService.crearSubasta(this.product._id, this.seller._id, this.auctionForm.value).subscribe(data => {
            if (data) {
              this.nf.notification("success", {
                'title': 'Subasta creada con exito.',
                'description': 'Su producto ahora esta en subasta!!'
              });
              this.router.navigate(['/seller-product', data['subasta']._id]);
            }
          }, e => {
            console.log(e);
          })
        }
      });
    } else {
      this.nf.notification("warning", {
        'title': 'Formulario invalido.',
        'description': 'Por complete todos los datos necesarios de la subasta.'
      });
    }
  }

  getSeller() {
    const sellerTemp = localStorage.getItem('user');
    this.seller = JSON.parse(sellerTemp);
  }

}
