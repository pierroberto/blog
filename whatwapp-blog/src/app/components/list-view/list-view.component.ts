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
  ngOnInit() {
    this.list = this.fakedb.getPosts()
    console.log('res', this.list)
  }

}
