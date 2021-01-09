import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';
import { ProductoService } from 'src/app/services/producto.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  products: any[] = [];
  p: number = 1;
  modalRef: BsModalRef;
  productShow:any={};

  constructor(private productService: ProductoService, private modalService: BsModalService,private productEmitter:ProductEmiterService,
    private webSocketService: WebSocketService, private nf: NotifierService,private router:Router) { }

  ngOnInit(): void {
    this.getProductosByUser();
    this.webSocketService.listen('estado_actualizado').subscribe((data: any) => {
      if (data) {
        this.nf.notification("info", {
          'title': `Producto revisado `,
          'description': `Tu producto con nombre ${data.product.name} ha sido revisado, dirigete al panel de tus productos para saber en que estado se encuentra.`
        });
        this.getProductosByUser();
      }
    })

  }

  getProductosByUser() {
    this.productService.getProductByUser().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products)
    })
  }

  buscarPorNombreEstado(filter: string) {
    this.productService.buscarPorUsuarioYNombreEstado(filter).subscribe((data: any) => {
      this.products = data.products;
    })
  }

  filtrar(event: any){
    if(event.target.value == ''){
      this.buscarPorNombreEstado('all')
    }else{
      this.buscarPorNombreEstado(event.target.value);
    }
  }
  
  openModal(template: TemplateRef<any>,producto:any) {
    this.modalRef = this.modalService.show(template);
    this.productShow=producto;
  }

  goToProduct(product:any){
    const tempArray=product.description.slice(0,product.description.length-1)
    const shipping=product.description.slice(product.description.length-1,product.description.length)

    this.router.navigate(['seller/edit/photos'])
    //usar preductEmitter
    this.productEmitter.addCategory(product.category);
    this.productEmitter.addFile(product.imgs);
    this.productEmitter.addDescription(tempArray);
    this.productEmitter.addShiping(shipping);

    localStorage.setItem('productoMod',JSON.stringify(product));

  }

}
