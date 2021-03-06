/**
 * Created by Josip on 15.04.2017.
 */
// Angular imports
import { Injectable } from "@angular/core";
import { Http }       from "@angular/http";
// Rxjs imports
import { Observable } from "rxjs/Observable";
import                     "rxjs/add/operator/map";
// Local imports
import { Hero }       from "./hero";

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http.get(`app/heroes/?name=${term}`).map(response => response.json().data as Hero[]);
  }
}
