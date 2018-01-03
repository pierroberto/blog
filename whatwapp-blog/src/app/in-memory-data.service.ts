import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {id: 1, title: 'hello', author: 'rob', date: 'date', content: 'long content'},
      {id: 2, title: 'hello', author: 'rob', date: 'date', content: 'long content'}
    ];
    const authors = [
      {id: 1, username: 'bob', password: 'hello'}
    ]
    return {posts, authors};
  }
}
