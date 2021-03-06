import { Component, OnInit } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private fakedb: FakedbService) { }
  list;
  logged: boolean;

  ngOnInit() {
    // I get the list of the posts and I sort them
    // in order to display them in chronological order
    this.fakedb.getPosts().subscribe(fullList => {
      this.list = fullList;
      this.list = this.list.sort((a,b) => {
        return b.date - a.date;
      });
      this.fakedb.isLogged().subscribe(logged => {
        if (logged[0].status) this.logged = true;
      });
    });
  }
}
