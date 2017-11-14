import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthorService} from '../author.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {

  constructor(authorService : AuthorService) { 
    this._author = authorService.getAuthor();
  }

  ngOnInit() {
  }
  _author;
  author_title = "list of authors"
}
