import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

    getCourses() : string[] {
        return  ["c1", "c2", "c3"];
    }
    
  constructor() { }

}
