import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductoService) { }

  ngOnInit(): void {
    this.getProductosByUser();
  }

  getProductosByUser() {
    this.productService.getProductByUser().subscribe((data: any) => {
      this.products = data.products;
      console.log(data);
    })
  }
}
