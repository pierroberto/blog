import { Component, OnInit } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';
import { ActivatedRoute, Router } from '@angular/router';
const moment = require('moment')

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private fakedb: FakedbService, private route:ActivatedRoute, private router:Router) { }

  item;
  date: string;
  hour: string;
  logged: boolean;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fakedb.getPost(params.id).subscribe(item => {
        console.log('item', item)
        this.item = item;
        this.date = moment.unix(this.item.date).format('dddd, MMMM DD, YYYY');
        this.hour = moment.unix(this.item.date).format('hh:mm');
        console.log('date', this.date)
      })
    })
    this.fakedb.isLogged().subscribe(logged => {
      if (logged[0].status) this.logged = true
    })
  }

}
