import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  @Input() counter: number;

  constructor() { 
    this.counter = 0;
  }

  ngOnInit() {
  }

  increment(num:number) {
    this.counter += num;
    if(this.counter < 0) {
      this.counter=0;}
  }
}
