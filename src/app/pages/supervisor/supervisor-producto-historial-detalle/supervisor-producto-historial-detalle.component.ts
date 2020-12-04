import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/request/producto.model';

@Component({
  selector: 'app-supervisor-producto-historial-detalle',
  templateUrl: './supervisor-producto-historial-detalle.component.html',
  styleUrls: ['./supervisor-producto-historial-detalle.component.css']
})
export class SupervisorProductoHistorialDetalleComponent implements OnInit {

  idProducto: string;

  productos: Producto[];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {

    this.obtenerHistorialProducto(this.idProducto);
  }

  obtenerHistorialProducto(id:string){
    console.log(id);
    this.productoService.obtenerHistorialProducto(id)
      .subscribe(data => {
        console.log(data['historial_producto']);
       this.productos = data['historial_producto'];
      // console.log(this.productos);
      // console.log(this.productos);
      })
  }

}
