import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-navbar-portal',
  templateUrl: './navbar-portal.component.html',
  styleUrls: ['./navbar-portal.component.css']
})
export class NavbarPortalComponent implements OnInit {

  categories: any[] = [];


  constructor(private categoryService: CategoriaService) { }

  ngOnInit(): void {
    this.getCategories();

  }

  getCategories() {
    this.categoryService.obtenerCategoria().subscribe((data: any) => {
      this.categories = data.categories;
    })
  }

}
