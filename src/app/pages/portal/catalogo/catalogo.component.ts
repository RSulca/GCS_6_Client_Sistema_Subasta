import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubastaService } from 'src/app/services/subasta.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  page = 1;
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

  subastas: any[] = [];

  constructor(private subastaService: SubastaService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      const category = data['categoryName'];
      this.subastaService.subastasPorCategoria(category).subscribe((data: any) => {
        this.subastas = data['results']
        console.log('aaaaaaaaaa')
        console.log(this.subastas);
      })
    })
  }

}
