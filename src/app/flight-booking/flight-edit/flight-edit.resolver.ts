import { Injectable } from '@angular/core';
import { FlightService } from './../flight-search/flight.service';
import { Observable } from 'rxjs';
import { Flight } from './../../entities/flight';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class FlightEditResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight>  {
        let id = route.params['id'];
        return this.flightService.findById(id);
    }

}