import { Component, Input, OnInit } from '@angular/core';
import { Time } from 'src/app/models/request/time.model';
//import * as countdown from 'countdown';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css']
})
export class TimerComponentComponent implements OnInit {
  @Input() endDate: string;
  @Input() endDay: string;
  private subscription: Subscription;

  public dateNow = new Date();
  diaFinSubasta: any
  hora: any;
  day: any;
  public dDay: any;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  private getTimeDifference () {
      this.diaFinSubasta = new Date(this.endDay);
      //this.hora = '12:58:31';
      this.hora = this.endDate;
      //this.day = 'Sun Jan 11 2021';
      this.day = this.diaFinSubasta.toDateString();
      console.log(this.dateNow);
      console.log(this.diaFinSubasta);
      this.dDay = new Date(`${this.day} ${this.hora}`);

      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

private allocateTimeUnits (timeDifference) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}


constructor() { }

  ngOnInit() {
     this.subscription = interval(1000)
         .subscribe(x => { this.getTimeDifference(); });
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }
}
