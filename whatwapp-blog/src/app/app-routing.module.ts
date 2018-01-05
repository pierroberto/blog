import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: ListViewComponent },
  { path: 'post/:id', component: ItemDetailsComponent },
  { path: 'new', component: PostComponent},
  { path: 'post/:id/edit', component: PostComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}
