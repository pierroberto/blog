import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FakedbService {

  constructor(private http: HttpClient) { }

  private postUrl = 'api/posts'


  getPosts() {
    return this.http.get(this.postUrl).subscribe(res => console.log(res));
  }
  getPost (id: number) {
    const url = `api/posts/${id}`;
    return this.http.get(url).subscribe(res => console.log(res));

  }

}
