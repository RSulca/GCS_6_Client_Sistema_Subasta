import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotifierService } from 'src/app/services/notifier.service';
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

  constructor(private productService: ProductoService, private modalService: BsModalService,
    private webSocketService: WebSocketService, private nf: NotifierService) { }

  ngOnInit(): void {
    this.getProductosByUser();
    this.webSocketService.listen('estado_actualizado').subscribe((data: any) => {
      if (data) {
        this.nf.notification("info", {
          'title': `Producto revisado `,
          'description': `Tu producto con nombre ${data.product.name} ha sido revisado, dirigete al panel de tus productos para saber en que estado se encuentra.`
        });
      }
    })

  }

  getProductosByUser() {
    this.productService.getProductByUser().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products)
    })
  }



  openModal(template: TemplateRef<any>,producto:any) {
    this.modalRef = this.modalService.show(template);
    this.productShow=producto
  }

}
