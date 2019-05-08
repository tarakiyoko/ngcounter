import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  @Input() detailCounter: object;

  constructor() { 
    this.detailCounter = {};
  }

  ngOnInit() {
  }

  increment(num:number) {
    this.detailCounter['detailCounter'] += num;
    if(this.detailCounter['detailCounter'] < 0) {
      this.detailCounter['detailCounter']=0;}
  }
}
