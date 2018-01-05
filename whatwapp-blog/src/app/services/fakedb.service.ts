import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class FakedbService {

  constructor(private http: HttpClient, private route:ActivatedRoute, private router:Router) { }
  list;
  private postUrl = 'api/posts'

  addPost(post) {
    console.log('post info', post)
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('api/posts', post, httpOptions);
  }

  getUser(username, password) {
    return this.http.get('api/authors')
  }

  getPosts() {
    return this.http.get(this.postUrl);
  }

  editPost (newPost, id) {
    let index = 0;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.getPosts().subscribe(posts => {
      this.list = posts;
      // I go through all the posts in order to find the one I want to replace
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === Number(newPost.id)) {
          index = i;
        }
      }
      this.list[index] = newPost;
      return this.http.put('api/posts', this.list[index], httpOptions).subscribe(_ => {
        this.router.navigate([`/post/${id}`]);
      });
    });
  }

  deletePost(id) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete(`api/posts/${id}`)
      .subscribe(_ => this.router.navigate([`/post`]))
  }

  getPost (id: number) {
    const url = `api/posts/${id}`;
    return this.http.get(url);
  }

  isLogged () {
    return this.http.get('api/login');
  }

  login (status) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put('api/login', status, httpOptions)
  }

}
