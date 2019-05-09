import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() super:object;

  constructor() { 
    this.super = {};
  }

  ngOnInit() {
  }

  increment(num:number) {
    this.super['super'] += num;
    if(this.super['super'] <0) {
      this.super['super']=0;
    }
  }

  startIncrement() {
    setInterval(() => this.super['super']++, 1000);
  }
}
