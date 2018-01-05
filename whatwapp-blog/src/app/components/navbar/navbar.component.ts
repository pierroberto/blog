import { Component, OnInit } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fakedb: FakedbService, private route:ActivatedRoute, private router:Router) {}

  checkLogin() {
    this.fakedb.isLogged().subscribe(isLogged => {
      if (isLogged[0].status) {
        this.fakedb.login({id: 0, status: false, user: ''}).subscribe(_ => this.router.navigate(['/post']));
      } else {
        this.router.navigate(['/login']);
      }
    });

  }

  ngOnInit() {
  }

}
