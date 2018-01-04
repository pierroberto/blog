import { Component, OnInit } from '@angular/core';
import { FakedbService } from '../../services/fakedb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private fakedb: FakedbService, private route:ActivatedRoute, private router:Router) { }

  list;
  post = {title: '', content: '', author: '', date: 0};
  id: number;
  user: string;

  addPost() {
    this.fakedb.isLogged().subscribe(userLogin => {
      if (!userLogin[0].status) return alert('something in the login went wrong')
      this.post = {
        ...this.post,
        author: userLogin[0].user,
        date: Date.now()
      };
      return this.fakedb.addPost(this.post).subscribe(_ => {
        this.router.navigate(['/post']);
      });

    })
  }
  ngOnInit() {
    return this.fakedb.getPosts().subscribe(fullList => {
      this.list = fullList;
      this.id = this.list[this.list.length - 1].id;
    });
  }

}
