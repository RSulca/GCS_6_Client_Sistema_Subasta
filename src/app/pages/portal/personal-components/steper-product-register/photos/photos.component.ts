import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private router: Router,private productEmiter: ProductEmiterService) { }

  ngOnInit(): void {
  }

  goToData() {
    this.router.navigate(['seller/edit/data'])
  }

}
