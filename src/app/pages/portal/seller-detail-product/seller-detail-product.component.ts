import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { SubastaService } from 'src/app/services/subasta.service';
import { WebSocketService } from '../../../services/web-socket.service';

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

  
  //infoAuction: object = {
   // endAuction: '2020-12-31 01:00:00'
   //endAuction: '   01:00:00'
  //};

  nombreProducto: string;
  imagenesProducto = [];
  vendedor: string;
  calificacion: number[];
  idSubasta: string;
  precioBase: number;
  endAuction: any;
  endDayAuction: any;

  constructor(private _socket: WebSocketService, private activatedRoute: ActivatedRoute, private clienteService: ClienteService, private subastaService: SubastaService) {
    this.idSubasta = '';
    this.activatedRoute.params.subscribe(data => {
      const idSubasta = data['idSubasta'];
      this.idSubasta = idSubasta;
      this.obtenerSubasta(idSubasta);
    });
    this.clienteService.obtenerCalificacionVendendor().subscribe(data => {
      this.calificacion = Array(data['promedio']);
      console.log(this.calificacion);
    });
    
  }
  
  ngOnInit(): void {
    // this._socket.listen(this.idSubasta).subscribe((res:any) => {
    //   console.log(res);
    // });
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
        this.precioBase = data['subasta'].precio_base;
        this.endAuction = data['subasta'].hora_fin;
        this.endDayAuction = data['subasta'].fecha_fin;
       console.log(data['subasta']);
      })
  }

}
