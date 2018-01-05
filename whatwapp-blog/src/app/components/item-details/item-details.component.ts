import { Component, OnInit } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';
import { ActivatedRoute, Router } from '@angular/router';
const moment = require('moment');

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private fakedb: FakedbService, private route:ActivatedRoute, private router:Router) { }

  //item: any;
  id : number;
  date: string;
  hour: string;
  logged: boolean;
  item: any;

  deletePost () {
    return this.fakedb.deletePost(Number(this.id));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fakedb.getPost(params.id).subscribe(item => {
        this.id = params.id
        this.item = item;
        this.date = moment(this.item.date).format('dddd, MMMM DD, YYYY');
        this.hour = moment(this.item.date).format('hh:mm');
      })
    })
    this.fakedb.isLogged().subscribe(logged => {
      if (logged[0].status) this.logged = true
    })
  }

}
