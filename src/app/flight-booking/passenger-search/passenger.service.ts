import { Passenger } from './../../entities/passenger';
import { Flight } from './../../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PassengerService {

    constructor(private http: Http) { 
    }

    find(name: string): Observable<Passenger[]> {
        
        let url = 'http://www.angular.at/api/passenger';

        let search = new URLSearchParams();
        search.set('name', name);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, { search, headers  })
                .map(resp => resp.json());
    }

}