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
    // I check if both the fields have been filled
    if (!this.password || !this.username) alert('All the fields are mandatory');
    // I look for the list of users:
    // 1) I check if the username submitted exists
    // 2) I check if the password is correct
    this.fakedb.getUser(this.username, this.password).subscribe(fullList => {
      this.list = fullList;
      const user = this.list
        .filter(author => author.username === this.username)
        .filter(author => author.password === this.password);
      // If the filter functions return nothing it means that user/password
      // are wrong/do not exist ... else set status as true and the user is logged
      if (!user.length) {
        this.fakedb.isLogged().subscribe(logged => {
          this.isLogged = logged[0].status;
        });
      } else {
        this.fakedb.login({id:0, status: true, user: this.username})
        .subscribe(response => this.router.navigate(['/post']));
      }
    });
  }

  ngOnInit() {
  }

}
