import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ItemViewComponent } from './components/item-view/item-view.component';

import { FakedbService } from './services/fakedb.service';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ListViewComponent,
    ItemViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [FakedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
