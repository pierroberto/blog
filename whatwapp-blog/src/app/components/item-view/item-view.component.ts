import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css'],
  inputs: ['item']
})
export class ItemViewComponent implements OnInit {

  constructor() { }

  @Input() item;

  ngOnInit() {

  }

}
