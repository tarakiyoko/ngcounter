import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() super:number;

  constructor() { 
    this.super = 0;
  }

  ngOnInit() {
  }

  increment(num:number) {
    this.super += num;
    if(this.super <0) {
      this.super=0;
    }
  }

}
