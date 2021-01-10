import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subasta } from 'src/app/models/request/subasta.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  auctionRequest: Subasta = new Subasta();
  product: any = {};
  auctionForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder,
    private productService: ProductoService) { }

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
      titulo:['',[Validators.required]],
      moneda:['',[Validators.required]],
      modo:['',[Validators.required]],
      columns:['',[Validators.required]],
      tipo:['',[Validators.required]],
      fecha_inicio:['',[Validators.required]],
      fecha_fin:['',[Validators.required]],
      precio_base:['',[Validators.required]],
      //falta precio minimo, horainigo, hora fin
    });
  }



}
