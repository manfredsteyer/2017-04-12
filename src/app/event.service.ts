import { Flight } from './entities/flight';

import { Injectable, OnInit } from '@angular/core';
import { Subject, ReplaySubject } from "rxjs";

@Injectable()
export class EventService  {
    constructor() { 
        this.flightSelectedSubject.subscribe(flight => {
            console.debug('Neuer Flug ausgewählte', flight);
        })
    } 

    public flightSelectedSubject = new ReplaySubject<Flight>(2);

}