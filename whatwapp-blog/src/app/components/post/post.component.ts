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
  post = {id: 0, title: '', content: '', author: '', date: 0};
  edit = false;
  id: number;
  user: string;
  existingId: number;
  item: any;

  addPost() {
    // I check if the user is logged
    this.fakedb.isLogged().subscribe(userLogin => {
      if (!userLogin[0].status) return alert('something in the login went wrong');
      this.fakedb.getPosts().subscribe(fullList => {
        this.list = fullList;
        // I sort the list because I need the highest id
        // in order to increase it for the new post
        // and I do it only if I have a list available.
        // otherwise it means that it is the first post
        // and in this case I know that the first id is going to be 1
        if (this.list.length) {
          const orderedList = this.list.sort((a, b) => {
            return a.id - b.id;
          });
          this.id = orderedList[orderedList.length - 1].id;
        } else
          this.id = 0;
        // I generate the post object which will be stored in the fakedb
        this.post = {
          ...this.post,
          id: this.id + 1,
          author: userLogin[0].user,
          date: Date.now(),
        };
        // I check whether the user added title and content to the article
        if (!this.post.content || !this.post.title) return alert('all the fields are mandatory');
        return this.fakedb.addPost(this.post).subscribe(_ => {
          this.router.navigate(['/post']);
        });
      });
    });
  }

  updatePost() {
    // I check if the user logged in
    this.fakedb.isLogged().subscribe(userLogin => {
      if (!userLogin[0].status) return alert('something in the login went wrong')
      this.post = {
        ...this.post,
        id: Number(this.existingId),
        author: userLogin[0].user,
        date: Date.now()
      }
      return this.fakedb.editPost(this.post, this.post.id);
    });
  }

  ngOnInit() {
    // If the URL has no params, then I get
    // the list of all the posts in order to get the highest id
    // which will be used to create a new post...
    const editPost = this.route.params.subscribe(params => {
      if (!params.id) {
        this.fakedb.getPosts().subscribe(fullList => {
          this.list = fullList;
          this.id = this.list[this.list.length - 1].id;
        });
      // ... else it means that the user wants to edit the post
      // and then I need the id in order to get the right one.
      } else {
        this.edit = true;
        this.existingId = params.id;
        return this.fakedb.getPost(params.id).subscribe(item => {
          this.item = item;
          this.post.title = this.item.title;
          this.post.content = this.item.content;
        });
      }
    });
  }
}
