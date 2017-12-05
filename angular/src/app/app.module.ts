import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockerComponent } from './blocker/blocker.component';
import { LoginComponent } from './login/login.component';
import { GuardsComponent } from './guards/guards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotLoggedinComponent } from './not-loggedin/not-loggedin.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AdminComponent,
    AdminLoginComponent,
    DashboardComponent,
    BlockerComponent,
    LoginComponent,
    GuardsComponent,
    NavbarComponent,
    NotLoggedinComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
