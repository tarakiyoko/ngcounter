import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters: object[];
  superCounters: object[];
  constructor() {
    this.counters = [];
    this.superCounters = [];
  }

  ngOnInit() {
  }

  createCounter() {
    // Check little counters for increments of 6
    if (this.counters.length !== 0 && this.counters.length % 6 == 0) {

      // Only want level 1 supers
      const level1Super = this.superCounters.filter((val) => val['level'] === 1)

      // Check level 1 supers for increments of 3
      if (level1Super.length !== 0 && level1Super.length % 3 == 0) {
        const aggL1Super = level1Super.reduce((acc,val) => {
          return acc += val['super'];
        },0);
        // Aggregate little counters into super val
        const agg = this.counters.reduce((acc,val) => {
          return acc += val['detailCounter'];
        },0);
        let superCounter = {
          super: aggL1Super + agg,
          level: 2
        }
        this.superCounters.push(superCounter);
        this.superCounters = this.superCounters.filter((val) => val['level'] !== 1);
        this.counters = [];
      } else {
        // Aggregate little counters into super val and remove little counters
        const agg = this.counters.reduce((acc,val) => {
          return acc += val['detailCounter'];
        },0);
        let superCounter = {
          super: agg,
          level: 1
        }
        this.superCounters.push(superCounter);
        this.counters = []; 
      }   
    } else {
      // little counter instantiate
      let obj = {
        detailCounter: 0
      }
      this.counters.push(obj);
    }
  }
}
