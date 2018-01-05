import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {
        id: 2,
        title: "Chrome Extensions in React + Redux",
        author: 'Pier Roberto',
        date: 1515161632611,
        content: 'If you want to use React + Redux on your Chrome extension is because you probably need some sort of routing and persistency of the data. Unfortunately Chrome Extensions and in particular popups are not persistent by default.'},
      {
        id: 1,
        title: 'How to save tabs in Chrome with Pin Tabs',
        author: 'Pier Roberto',
        date: 1515161632611,
        content: 'What I really need is a sort of auto-expiring bookmarks tool. The idea is to have something that keep track of what I saved but only for a very short period of time. I need a kind of box which after a period is emptied by an automatic timer.'
      }
    ];
    const authors = [
      {id: 1, username: 'admin', password: 'admin'},
      {id: 2, username: 'user', password: 'user'}
    ];

    const login = [{id: 0, status: false, user: ''}];

    return {posts, authors, login};
  }
}
