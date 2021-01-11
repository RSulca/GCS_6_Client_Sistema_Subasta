import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  nombreProducto: string;
  imagenesProducto = [];
  vendedorNombre: string;
  vendedorApellido: string;
  calificacion: number[];

  subasta: any = {};

  constructor(private clienteService: ClienteService, private subastaService: SubastaService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data => {
      const idSubasta = data['idSubasta'];
      this.obtenerSubasta(idSubasta);
      // console.log(idSubasta)
    })

    this.clienteService.obtenerCalificacionVendendor().subscribe(data => {
      this.calificacion = Array(data['promedio']);
      console.log(this.calificacion);
    });
  }

  obtenerSubasta(id: string) {
    this.subastaService.obtenerSubasta(id)
      .subscribe(data => {
        this.nombreProducto = data['subasta'].producto['name'];
        this.imagenesProducto = data['subasta'].producto['imgs'];
        this.vendedorNombre = data['subasta'].vendedor['name'];
        this.vendedorApellido = data['subasta'].vendedor['lastname']
        this.subasta = data;
        console.log(this.subasta);
      })
  }

  //pasarle la categoria de la subasta que esta actuaelemnte para que me lsita las subastas de esa categoria y mostrarlas en el 
  //html linea 108
  // obtenerSubastasSimilares() {
  //   this.subastaService.subastasPorCategoria(category).subscribe((data: any) => {
  //     this.subastas = data.results
  //   })
  // }


}
