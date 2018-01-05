import { Component, OnInit, Input } from '@angular/core';
const moment = require('moment');

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css'],
  inputs: ['item']
})
export class ItemViewComponent implements OnInit {

  constructor() { }

  @Input() item;

  date: string;
  hour: string;

  convertTime(time) {
    // I convert the timestamp in readable time
    this.date = moment(this.item.date).format('dddd, MMMM DD, YYYY');
    this.hour = moment(this.item.date).format('hh:mm');
    return `${this.date} at ${this.hour}`;
  }

  ngOnInit() {
  }

}
