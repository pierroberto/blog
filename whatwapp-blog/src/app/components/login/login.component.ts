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
  isLogged = true;

  login() {
    if (!this.password || !this.username) alert('All the fields are mandatory');
    this.fakedb.getUser(this.username, this.password).subscribe(fullList => {
      this.list = fullList;
      const user = this.list
        .filter(author => author.username === this.username)
        .filter(author => author.password === this.password)
      if (!user.length)
        this.fakedb.isLogged().subscribe(logged => {
          console.log('this log', this.isLogged, 'res', logged[0].status)
          this.isLogged = logged[0].status
        });
      else {
        this.fakedb.login({id:0, status: true})
        .subscribe(response => this.router.navigate(['/post']))
      }
    })
  }

  ngOnInit() {
  }

}
