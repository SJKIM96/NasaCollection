import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }


getAuthor() : string[]{
    return ["a1", "a2", "a3"];
}
}
