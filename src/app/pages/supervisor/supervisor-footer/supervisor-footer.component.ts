import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-footer',
  templateUrl: './supervisor-footer.component.html',
  styleUrls: ['./supervisor-footer.component.css']
})
export class SupervisorFooterComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
