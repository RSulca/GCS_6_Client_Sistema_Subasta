import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-portal',
  templateUrl: './navbar-portal.component.html',
  styleUrls: ['./navbar-portal.component.css']
})
export class NavbarPortalComponent implements OnInit {

  categories: any[] = [];
  isLogged = false;

  constructor(private categoryService: CategoriaService, public loginService: LoginService) {
    //console.log(this.loginService.isLogged())
  }

  ngOnInit(): void {
    this.getCategories();
    this.loginService.isLogged.subscribe(res => {
      this.isLogged = res
    });
  }

  onLogout() {
    this.loginService.logout();
  }

  getCategories() {
    this.categoryService.obtenerCategoria().subscribe((data: any) => {
      this.categories = data.categories;
    })
  }

}
