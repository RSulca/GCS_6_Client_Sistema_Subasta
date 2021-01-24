import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  categorySelected: any = '';

  constructor(private categoryEmitter: ProductEmiterService) { }

  ngOnInit(): void {
  }



}
