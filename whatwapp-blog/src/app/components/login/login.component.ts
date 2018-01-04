import { Component, OnInit, Input } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private fakedb: FakedbService) { }

  password: string;
  username: string;
  list;

  login() {
    this.fakedb.getUser(this.username, this.password).subscribe(fullList => {
      this.list = fullList;
      const user = this.list
        .filter(author => author.username === this.username)
        .filter(author => author.password === this.password)
      if (!user.length) alert('username/password wrong!')
    })
  }

  ngOnInit() {
  }

}
