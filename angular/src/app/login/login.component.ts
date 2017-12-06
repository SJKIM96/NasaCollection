import { Component, OnInit } from '@angular/core';
import {AuthService} from '../authserve.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  public reS = false;
  message: Boolean;
  
  constructor(private authService: AuthService,
            private router: Router,
            private flashMessage: FlashMessagesService
           ){  }
  

  ngOnInit() {
  }
  
  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password,
      __v: 0
    }
    
    this.authService.authenticateUser(user).subscribe(
      res => {
        console.log("login");
        console.log(res.user);
        if(!(res.success)){
          this.flashMessage.show(res.msg, {
            classes: ['alert', 'alert-danger'] });
        } 
        
        else if(res.user.__v == 2){
          this.flashMessage.show("Logged as admin", {
          classes: ['alert', 'alert-success'] });
          this.authService.storeUserData(res.token, res.user);
        }
        
        else if(res.user.__v == 0){
          alert( "Your account not verified");
            this.router.navigate(['/login']);
            this.reS = true;
        }
        
        else{
          this.flashMessage.show("You are now logged in", {
            classes: ['alert', 'alert-success'] });
          this.authService.storeUserData(res.token, res.user);
          this.router.navigate(['/profile']);
        }
        this.authService.isAdmin();
      },
      err =>{
        this.flashMessage.show('Something bad happened!', {
            classes: ['alert', 'alert-danger'] });
      });
  }
  
  onResendVerification(){
    const user = {
      email: this.email,
      password: this.password,
      __v: 0
    }
    this.authService.reSendVeri(user).subscribe(
      res =>{
         this.flashMessage.show("Verification sent", {
            classes: ['alert', 'alert-success'] });
      }
    );
  }

}