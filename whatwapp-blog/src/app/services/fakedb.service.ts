import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FakedbService {

  constructor(private http: HttpClient) { }

  private postUrl = 'api/posts'

  addPost(title, author, date, content) {
    return this.http.post('api/posts', {title, author, date, content})
    .subscribe(res => console.log('res post', res))
  }

  getUser(username, password) {
    return this.http.get('api/authors')
  }

  getPosts() {
    return this.http.get(this.postUrl).subscribe(res => res);
  }

  getPost (id: number) {
    const url = `api/posts/${id}`;
    return this.http.get(url).subscribe(res => res);
  }

}
