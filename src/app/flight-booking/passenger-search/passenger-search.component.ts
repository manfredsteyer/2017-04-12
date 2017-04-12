import { Passenger } from './../../entities/passenger';
import { PassengerService } from './passenger.service';
import { Flight } from './../../entities/flight';
import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";

@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html',
    providers: [PassengerService]
})
export class PassengerSearchComponent {

    name: string;
    passengers: Array<Passenger> = [];
    
    selectedPassenger: Passenger;

    constructor(private passengerService: PassengerService) {
    }

    search(): void {
        
        this.passengerService
            .find(this.name)
            .subscribe(
                (passengers: Passenger[]) => {
                    this.passengers = passengers;
                },
                (err) => {
                    console.debug('Fehler', err);
                }
            )

    }

    select(p: Passenger): void {
        this.selectedPassenger = p;
    }

}