import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Products } from '../../../models/request/products.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productsAprobado: Products[];
  productsRechazado: Products[];
  productsPorSubsanar: Products[];
  linkImage:string;

  constructor(private _product: ProductoService) {
    this.productsAprobado = [];
    this.productsRechazado = [];
    this.productsPorSubsanar = [];
    this.linkImage = '';
  }

  ngOnInit(): void {
    this.getProductsByStates();
  }

  getProductsByStates() {
    this._product.getProductsByState('APROBADO').subscribe(res => {
      this.productsAprobado = res;
    })
    this._product.getProductsByState('RECHAZADO').subscribe(res => {
      this.productsRechazado = res;
    })
    this._product.getProductsByState('POR_SUBSANAR').subscribe(res => {
      this.productsPorSubsanar = res;
    })
  }

  catchImageUrl(link:string){
    this.linkImage = link;
  }

}
