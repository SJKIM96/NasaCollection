import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NasaService {
    
result:any;
 list: string[] = [];

private NASAquery = "https://images-api.nasa.gov/search?q="; //search query from nasa api
  constructor(private _http: Http) { }

getValues(query){
    return this._http.get(this.NASAquery + query).map((data: any) => data.json());
}
}