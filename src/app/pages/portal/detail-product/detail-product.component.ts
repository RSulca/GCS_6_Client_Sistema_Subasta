import { Component, OnInit, Output } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { SubastaService } from 'src/app/services/subasta.service';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../../services/web-socket.service';

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

  // infoAuction: object = {
  //   endAuction: '2020-12-31 05:00:00'
  // };

  nombreProducto: string;
  imagenesProducto = [];
  vendedorNombre: string;
  vendedorApellido: string;
  calificacion: number[];
  idSubasta:string;
  precioBase: number;
  subasta:any;
  endAuction: any;
  endDayAuction: any;

  constructor(private _socket:WebSocketService, private activatedRoute:ActivatedRoute, private clienteService: ClienteService, private subastaService: SubastaService) {
    this.idSubasta = '';
    this.activatedRoute.params.subscribe(data => {
      const idSubasta = data['idSubasta'];
      this.idSubasta = idSubasta;
      this.obtenerSubasta(idSubasta);
    });
  }
  
  ngOnInit(): void {
    this.clienteService.obtenerCalificacionVendendor().subscribe(data => {
      this.calificacion = Array(data['promedio']);
      console.log(this.calificacion);
    });
    this._socket.listen(this.idSubasta).subscribe((res:any) => {
      console.log(res);
    });
  }

  avisar(name: string) {
    console.log(name);
    this._socket.emit(this.idSubasta, {
      message: `Holaaa soy ${name}`
    })
  }

  obtenerSubasta(id: string) {
    this.subastaService.obtenerSubasta(id) 
      .subscribe(data => {
        this.nombreProducto = data['subasta'].producto['name'];
        this.imagenesProducto = data['subasta'].producto['imgs'];
        this.vendedorNombre = data['subasta'].vendedor['name'];
        this.vendedorApellido = data['subasta'].vendedor['lastname'];
        this.precioBase = data['subasta'].precio_base;
        this.endAuction = data['subasta'].hora_fin;
        this.endDayAuction = data['subasta'].fecha_fin;
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
