import { EventService } from './../../event.service';
import { FlightService } from './flight.service';
import { Flight } from './../../entities/flight';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService],
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    
    selectedFlight: Flight;

    showBasket = false;

    constructor(
        private flightService: FlightService,
        private eventService: EventService) {
        console.debug('component');
    }

    show() {
        this.showBasket = true;
    }

    hide() {
        this.showBasket = false;
    }

    search(): void {
        
        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (err) => {
                    console.debug('Fehler', err);
                }
            )

    }

    select(f: Flight): void {

        this.selectedFlight = f;
        this.eventService.flightSelectedSubject.next(f);
        
    }

}