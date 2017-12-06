import { Component, OnInit } from '@angular/core';
import {AuthService} from '../authserve.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';


@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  dmca: String;
  privacy: String;
  security: String;
  
  constructor(private authService: AuthService,
            private router: Router,
            private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    // security = this.authService.getSecurity();
    // policies = this.authService.getPrivacy();
    // dmca = this.authService.getDMCA();
  }

}
