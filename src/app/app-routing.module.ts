import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './component/sports/sports.component';
import { IndexPageComponent } from './component/index-page/index-page.component';
import { HeaderComponent } from './component/header/header.component';
import { HeadlinesComponent } from './component/headlines/headlines.component';
import { LoginComponent } from './component/login/login.component';
import { PoliticsComponent } from './component/politics/politics.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:IndexPageComponent
  },
  {
    path:'sports',
    component:SportsComponent
  },
  {
    path:'headlines',
    component:HeadlinesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'politics',
    component:PoliticsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
