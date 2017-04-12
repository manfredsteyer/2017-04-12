import { Flight } from './../entities/flight';
import { EventService } from './../event.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'basket',
    templateUrl: './basket.component.html'
})

export class BasketComponent implements OnInit, OnDestroy {
    constructor(private eventService: EventService) { }

    flights: Flight[] = [];
    sub;

    ngOnInit() { 
        this.sub = this.eventService.flightSelectedSubject.subscribe(
            flight => {
                this.flights.push(flight);
            }
        )

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}