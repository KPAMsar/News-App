import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { IndexPageComponent } from './component/index-page/index-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewsService } from './service/news.service';
import { SportsComponent } from './component/sports/sports.component';
import { HeadlinesComponent } from './component/headlines/headlines.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { PoliticsComponent } from './component/politics/politics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexPageComponent,
    SportsComponent,
    HeadlinesComponent,
    SignupComponent,
    LoginComponent,
    PoliticsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule



  ],
  providers: [
    NewsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
