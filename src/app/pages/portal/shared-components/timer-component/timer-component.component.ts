import { Component, Input, OnInit } from '@angular/core';
import { Time } from 'src/app/models/request/time.model';
import * as countdown from 'countdown';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css']
})
export class TimerComponentComponent implements OnInit {
  @Input() endDate: string;
  time: Time = null;
  timerId: number = null;
  
  constructor() { }

  ngOnInit(): void {
    this.getRemainTime();
  }

  private getRemainTime(){
    let endDate = new Date(this.endDate);
    this.timerId = countdown(endDate, (ts) => {
      this.time = ts;
    }, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)
  }

  ngOnDestroy(){
    if(this.timerId){
      clearInterval(this.timerId);
    }
  }

}
