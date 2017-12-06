import { Component, OnInit } from '@angular/core';

import {AuthService} from '../authserve.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  security : String;
  privacy:String;
  dmca:String;

  constructor(private authService: AuthService ) {
    
  }


  ngOnInit() {
    // this.security = lol();
    console.log("HI");
    this.authService.getSecurity().subscribe(
                  res => {
                    console.log("VALUES UPDATING");
                    console.log(res);
                    this.security = res.user.sec;
                  });
    // this.privacy = "This is the privacy, this value is updatable";
    // this.dmca = "This is the security, this value is updatable";
    // console.log("VALUES UPDATING");
    // console.log(this.authService.getSecurity());
    // this.authService.getSecurity().subscribe(
    //   res =>{
    //     console.log("VALUES UPDATING");
    //     console.log(res);
    //     this.security = res.user.sec;
    //   });
  }
  
  onSave(){
    var thing = this.authService.returnEmail();
    var splitter = thing.split('"email":"');
    var userEmail = splitter[1].split('"}') //makes sure we get the email portion of the object
    
    this.authService.changeSecurity("mustafadawoud97@gmail.com", this.security).subscribe(
      res =>{
        this.security = res.user.sec;
      });
      
    // this.authService.changePrivacy(userEmail[0], this.privacy);
    // this.authService.changeDmca(userEmail[0], this.dmca);
  }
  
  
  
  
}
