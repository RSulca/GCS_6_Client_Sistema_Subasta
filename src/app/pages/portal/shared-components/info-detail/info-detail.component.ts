import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  @Input() infoAuction: any;
  @Input() typeUser: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
