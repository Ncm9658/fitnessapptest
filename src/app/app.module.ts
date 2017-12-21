import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { HeadComponent } from './head/head.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import { LoginService } from './models/login.service';
import { LoginrComponent } from './loginr/loginr.component';
import { ListComponent } from './list/list.component';
import { TrackerComponent } from './tracker/tracker.component';

const appRoutes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'login', component: LoginrComponent },
  { path: 'list', component: ListComponent },
  { path: 'tracker', component: TrackerComponent},
  { path: "", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HeadComponent,
    IndexComponent,
    NavComponent,
    LoginrComponent,
    ListComponent,
    TrackerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
