import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-home-portal',
  templateUrl: './home-portal.component.html',
  styleUrls: ['./home-portal.component.css']
})
export class HomePortalComponent implements OnInit {

  categories: any = {};
  categoriesSimple: any[] = [];

  customOptions: any = {
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

  constructor(private categoryService: CategoriaService, private webSocketService: WebSocketService, private nf: NotifierService) { }

  ngOnInit(): void {
    this.getCategories();
    this.webSocketService.listen('estado_actualizado').subscribe((data: any) => {
      if (data) {
        console.log(data)
        this.nf.notification("info", {
          'title': `Producto revisado `,
          'description': `Tu producto con nombre ${data.product.name} ha sido revisado, dirigete al panel de tus productos para saber en que estado se encuentra.`
        });
      }
    })
  }

  getCategories() {
    this.categoryService.obtenerCategoria().subscribe((data: any) => {
      this.categories = data.categories;
      this.categoriesSimple = this.categories.filter(c => c.color)
    })
  }
}
