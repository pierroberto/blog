import { Component, OnInit } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';
import { ActivatedRoute, Router } from '@angular/router';
import moment = require('moment');

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private fakedb: FakedbService, private route:ActivatedRoute, private router:Router) { }

  id : number;
  date: string;
  hour: string;
  logged: boolean;
  item:any = {title: '', author: ''};

  deletePost () {
    return this.fakedb.deletePost(Number(this.id));
  }

  ngOnInit() {
    // I get the id of the post which is going to be userful
    // in case I need to delete it
    // I convert the timestamp in readable time
    this.route.params.subscribe(params => {
      this.fakedb.getPost(params.id).subscribe(item => {
        this.id = params.id;
        this.item = item;
        this.date = moment(this.item.date).format('dddd, MMMM DD, YYYY');
        this.hour = moment(this.item.date).format('hh:mm');
      });
    });
    // I get the info about whether the user is logged or not
    // If he's logged then it will be shown the icons to edit/delete the post
    this.fakedb.isLogged().subscribe(logged => {
      if (logged[0].status) this.logged = true;
    });
  }

}
