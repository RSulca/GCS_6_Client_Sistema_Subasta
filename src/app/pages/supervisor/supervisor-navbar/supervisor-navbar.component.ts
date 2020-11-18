import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES3 } from '../supervisor-sidebar/supervisor-sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-navbar',
  templateUrl: './supervisor-navbar.component.html',
  styleUrls: ['./supervisor-navbar.component.css']
})
export class SupervisorNavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }


  ngOnInit() {
    this.listTitles = ROUTES3.filter(listTitle => listTitle);
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}