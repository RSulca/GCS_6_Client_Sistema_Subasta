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
    this.productEmiter.categorySubjectChanged$.subscribe(data => {
      console.log("categoria",data);
    });
    this.productEmiter.filesSubjectChanged$.subscribe(data => {
      console.log("fotos",data);
    });
    this.productEmiter.descriptionSubjectChanged$.subscribe(data => {
      console.log("descripcion",data);
    });
    this.productEmiter.shippingSubjectChanged$.subscribe(data => {
      console.log("shipping",data);
    })
  }

}
