import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-completar',
  templateUrl: './cliente-completar.component.html',
  styleUrls: ['./cliente-completar.component.css']
})
export class ClienteCompletarComponent implements OnInit {

  constructor() { }
    public display: number;
  ngOnInit(): void {
    this.display=1;
  }

  handleClick(value){
    if (value===1) {
      this.display = 1;
    }
    if (value===2) {
      this.display = 2;
    }
    if(value ===3){
      this.display = 3;
    }
  }
}
