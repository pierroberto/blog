import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'post', component: ListViewComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}
