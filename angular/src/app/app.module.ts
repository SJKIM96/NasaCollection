import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NasaService } from './nasa.service';
import { CollectionService } from './collectionserve.service';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './authserve.service';
import { NotLoggedInComponent } from './not-loggedin/not-loggedin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ValidateService } from './validate.service';
//import { AdminService } from './admin.service';
//import {AdminLoginComponent} from './policies/policies.component';

import { PoliciesComponent } from './policies/policies.component';

const appRoutes: Routes = [
  { path: '', component: NotLoggedInComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'policies', component: PoliciesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotLoggedInComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    PoliciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule,
    HttpModule
  ],
  providers: [AuthService, ValidateService, CollectionService, NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
