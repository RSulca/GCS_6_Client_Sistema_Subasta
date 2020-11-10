import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portal',
  templateUrl: './home-portal.component.html',
  styleUrls: ['./home-portal.component.css']
})
export class HomePortalComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {items: 1},
      400: {items: 2},
      740: {items: 3},
      940: {items: 4}},
    nav: true
    }
  constructor() { }

  ngOnInit(): void {
  }
}
