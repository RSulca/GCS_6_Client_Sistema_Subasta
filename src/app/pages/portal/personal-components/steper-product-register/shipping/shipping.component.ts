import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingData: any = '';
  recoger: boolean = false;

  constructor(private router: Router, private productEmiter: ProductEmiterService, private nf: NotifierService) { }

  ngOnInit(): void {
  }

  goToReview() {
    console.log(this.shippingData)
    if (this.shippingData === '0' || this.shippingData === null || this.shippingData === '') {
      this.nf.notification("warning", {
        'title': 'Formulario invalido.',
        'description': 'Por favor seleccione la persona responsable del pago del envio del producto.'
      });
    } else {
      this.productEmiter.addShiping({
        'dataShipping': this.shippingData,
        'recoger': this.recoger
      });
      this.router.navigate(['seller/edit/reviewer'])
    }

  }

  onChange(e) {
    this.shippingData = e;
  }
}
