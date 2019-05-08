import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters: object[];
  superCounters: [];
  constructor() {
    this.counters = [];
  }

  ngOnInit() {
  }

  createCounter() {
    if (this.counters.length !== 0 && this.counters.length % 6 == 0) {
      const agg = this.counters.reduce((acc,val) => {
        console.log(val);
        return acc += val['detailCounter'];
      },0);
      console.log(agg);
      // TODO: will need to create super counter.
      // TODO: aggregate counter values in counters[]
      this.counters = [];      
    } else {
      let obj = {
        detailCounter: 0
      }
      this.counters.push(obj);
    }
  }
}
