import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import {AuthService } from '../authserve.service';
import { FlashMessagesService } from 'ngx-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: String;
  password: String;
  
  constructor(private validateService: ValidateService, 
  private flashMessageService: FlashMessagesService,
  private authService: AuthService,
  private router: Router) {
  }

  ngOnInit() {
  }
  
  onRegisterSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }
    
    if(!this.validateService.validateEmail(user.email)){
    this.flashMessageService.show('input valid email', {
      classes: ['alert', 'alert-danger']
    });
      return false;
    }
   
    if(!this.validateService.validateRegister(user)){
     this.flashMessageService.show('Please fill missing fields!', {
      classes: ['alert', 'alert-danger']
    });
      return false;
    }
    
    // Register user
    this.authService.register(user).subscribe(
      res => {
        console.log(res.success);
        if(res.success){
        alert('registered, verify email before logging in');
        this.router.navigate(['/login']);
        } else{
          alert(JSON.stringify(res.msg));
        }
        }, 
        err => {
          this.flashMessageService.show('authrize failed', {
            classes: ['alert', 'alert-danger'] });
        });
  }
  

}
