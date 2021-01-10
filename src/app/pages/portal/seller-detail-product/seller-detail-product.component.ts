import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { SubastaService } from 'src/app/services/subasta.service';

@Component({
  selector: 'app-seller-detail-product',
  templateUrl: './seller-detail-product.component.html',
  styleUrls: ['./seller-detail-product.component.css']
})
export class SellerDetailProductComponent implements OnInit {

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

  infoAuction: object = {
    endAuction: '2020-12-31 05:00:00'
  };

  nombreProducto : string;
  imagenesProducto = [];
  vendedor : string;
  calificacion: number[];
  
  constructor(private activatedRoute: ActivatedRoute, private clienteService: ClienteService, private subastaService: SubastaService) {
    this.activatedRoute.params.subscribe(data => {
      const idSubasta = data['idSubasta']; 
        this.obtenerSubasta(idSubasta);
    });
    this.clienteService.obtenerCalificacionVendendor().subscribe(data => {
      this.calificacion = Array(data['promedio']);
      console.log(this.calificacion);
    });

   }

  ngOnInit(): void {
  }

  obtenerSubasta(id: string){
    this.subastaService.obtenerSubasta(id)
      .subscribe(data => {
        this.nombreProducto = data['subasta'].producto['name'];
        this.imagenesProducto = data['subasta'].producto['imgs'];
      })
  }

}
