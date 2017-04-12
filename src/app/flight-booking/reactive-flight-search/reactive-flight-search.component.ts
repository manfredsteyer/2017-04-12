import { CityValidator } from './../../shared/validation/city-validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightService } from './../flight-search/flight.service';
import { Flight } from './../../entities/flight';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";

@Component({
    selector: 'reactive-flight-search',
    templateUrl: './reactive-flight-search.component.html',
    providers: [FlightService],
    styleUrls: ['./reactive-flight-search.component.css']
})
export class ReactiveFlightSearchComponent {

    filterForm: FormGroup;

    flights: Array<Flight> = [];
    
    selectedFlight: Flight;

    formMetadata = [
        { name: 'from', label: 'From' },
        { name: 'to', label: 'To' },
    ];

    constructor(
        private flightService: FlightService,
        private fb: FormBuilder
        ) {
    
            this.filterForm = fb.group({
                from: [
                    'Graz',
                    [
                        Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(30),
                        Validators.pattern('[A-Za-zöäüßÖÄÜ]+'),
                        CityValidator.validateCity(['Graz', 'Wien', 'Hamburg'])
                    ],
                    [
                        CityValidator.asyncCity
                    ]
                ],
                to: [
                    'Hamburg'
                ]
            });

            this.filterForm.validator = Validators.compose([CityValidator.roundTrip]);


            this.filterForm.valueChanges.subscribe(value => {
                console.debug('valueChanges auf Formular-Ebene', value);
            });

            this.filterForm.controls['from'].valueChanges.subscribe(value => {
                console.debug('valueChanges auf Ebene von from', value);
            });

    }

    search(): void {
        
        let value = this.filterForm.value;

        this.flightService
            .find(value.from, value.to)
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
    }

}