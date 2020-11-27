import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/request/producto.model';
import { jsonpFactory } from '@angular/http/src/http_module';


@Component({
  selector: 'app-supervisor-producto-detalle',
  templateUrl: './supervisor-producto-detalle.component.html',
  styleUrls: ['./supervisor-producto-detalle.component.css']
})
export class SupervisorProductoDetalleComponent implements OnInit {

  datos: string[] = [];

  idProducto: string;

  array1: string[] = [];

  array2: string[] = [];

  imagenes1: string[] = [];

  imageObject = [];


  constructor(private productoService:ProductoService,) { }

  ngOnInit(): void {
    this.obtenerProducto(this.idProducto);
    console.log(this.imageObject);
  }

  obtenerProducto(id:string){
    this.productoService.obtenerProducto(id)
      .subscribe(data => {
        var descripcion = JSON.parse(data['product'].description);
        for(var obj in descripcion){
          if(descripcion.hasOwnProperty(obj)){  
          for(var prop in descripcion[obj])
              if(descripcion[obj].hasOwnProperty(prop)){
                this.array1.push(prop);
                this.array2.push(descripcion[obj][prop]);
              }
          }
        }
        var imagenes = data['product'].imgs;
        if(imagenes.length > 0){
          for(var i= 0; i<imagenes.length; i++){
            this.imageObject[i] = {
              image : imagenes[i],
              thumbImage: imagenes[i],
              title: null
            };
          }
        }
      })
  }
  
}
