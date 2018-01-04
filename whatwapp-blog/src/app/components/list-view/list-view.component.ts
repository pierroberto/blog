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
  date: string;
  hour: string;
  ngOnInit() {
    this.fakedb.getPosts().subscribe(fullList => {
      this.list = fullList
      this.fakedb.isLogged().subscribe(logged => {
        if (logged[0].status) this.logged = true
      })
    });

  }

}
