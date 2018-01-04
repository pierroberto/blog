import { Component, OnInit, Input } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private fakedb: FakedbService, private route:ActivatedRoute, private router:Router) {}

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
      else this.router.navigate(['/post'])
    })
  }

  ngOnInit() {
  }

}
