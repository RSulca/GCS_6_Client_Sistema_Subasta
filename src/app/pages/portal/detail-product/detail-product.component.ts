import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { SubastaService } from 'src/app/services/subasta.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }

  productosSimilares: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  }
  
  infoAuction: object = {
    endAuction: '2020-12-31 05:00:00'
  };

  nombreProducto : string;
  imagenesProducto = [];
  vendedorNombre : string;
  vendedorApellido : string;
  calificacion: number[];

  constructor(private clienteService: ClienteService, private subastaService: SubastaService) { }

  ngOnInit(): void {
    this.obtenerSubasta('5ffb41bfaa080c1cc00ef1e0');
    this.clienteService.obtenerCalificacionVendendor().subscribe(data => {
      this.calificacion = Array(data['promedio']);
      console.log(this.calificacion);
    });
  }

  obtenerSubasta(id: string){
    this.subastaService.obtenerSubasta(id)
      .subscribe(data => {
        this.nombreProducto = data['subasta'].producto['name'];
        this.imagenesProducto = data['subasta'].producto['imgs'];
        this.vendedorNombre = data['subasta'].vendedor['name'];
        this.vendedorApellido = data['subasta'].vendedor['lastname']
      })
  }


}
