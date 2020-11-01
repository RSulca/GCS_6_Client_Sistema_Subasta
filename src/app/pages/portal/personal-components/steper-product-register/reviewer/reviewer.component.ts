import { Component, OnInit } from '@angular/core';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {

  constructor(private productEmiter: ProductEmiterService) { }

  ngOnInit(): void {
  }

}
