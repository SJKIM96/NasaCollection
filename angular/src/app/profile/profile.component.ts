import { Component, OnInit } from '@angular/core';
import{AuthService} from '../authserve.service';
import {Router} from '@angular/router';
import { NasaService } from '../nasa.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { CollectionService } from '../collectionserve.service';
import {ValidateService} from '../validate.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any;
email: String;
searchPhoto: String;
collectionTitle: String;
collectionDescrip: String;
isPublic: Boolean = false;
imageList: String;
count:number;
//searchPhoto = "";
//userStatus = "";
photos: any [];
image: any [];
  constructor(private authService: AuthService, 
  private router: Router, 
  private nasaService: NasaService, 
  private collectionService: CollectionService,  
  private flashMessagesService: FlashMessagesService,
  private validateService : ValidateService
  ) {
    
    this.count=0;
    this.image=[];
    }

  onCollectionSubmit(){
    var thing = (this.authService.returnEmail());
    var splitter = thing.split('"email":"');
    var userEmail = splitter[1].split('"}')
    const collection = {
      email: userEmail[0], 
      searchPhoto: this.searchPhoto,
      title: this.collectionTitle,
      descrip: this.collectionDescrip,
      isPublic: this.isPublic,
      imageList: this.image
    }
    if(this.validateService.validateCollection(collection)){
    this.makeCollection(collection);
    }else{
    this.flashMessagesService.show('Title required',  {
      classes: ['alert', 'alert-danger'],
      timeout: 3000, 
    });
}
    

  }
    
handleSuccess(data)
{
this.photos = data.collection.items;
console.log(data.collection.items);
console.log(data.collection.items[0].links[0]["href"]);
};

search(searchPhoto){
  this.nasaService.getValues(this.searchPhoto)
  .subscribe(
        (data: any) => this.handleSuccess(data),
        );
};

makeCollection(collection){
  console.log(collection.email + "Inside makeCollection");
  this.collectionService.sendCollection(collection).subscribe(data => {
      if(data.success){
      this.flashMessagesService.show('image collection saved',  {
      classes: ['alert', 'alert-success'], 
      timeout: 3000, 
    });
      } 
      else{
      this.flashMessagesService.show('Failed',  {
      classes: ['alert', 'alert-danger'], 
      timeout: 3000, 
    });
      }
  });
      
 
  this.image=[]; //empty collection so user can create new one
  this.count = 0;
}
addToCollection(photo){
  console.log(photo.links[0].href);
    this.image[this.count]=photo.links[0].href;
    this.count++;
    //console.log(this.image);
  
}
ngOnInit() {}
}
