import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { IMovie } from "../../interface/IMovie";


/*
  Generated class for the MovieApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieApiProvider {

  private baseUrl:string = "../../assets/api/movies.json";
  movies: IMovie[];

  constructor(private readonly http: HttpClient, private readonly platform: Platform) {
    console.log('Hello MovieApiProvider Provider');
  }
  

  getMovies(): Observable {
return this.http.get(`${this.baseUrl}`);


  }
}