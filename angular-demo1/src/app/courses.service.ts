import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

    getCourses() : string[] {
        return  this.container;
    }
    
    setCourses (course : string) {
        if (this.container.includes (course)){
            return;
        }
        this.container.push(course);
    }
  constructor() { }

    container = ["c1", "c2", "c3"];
}
