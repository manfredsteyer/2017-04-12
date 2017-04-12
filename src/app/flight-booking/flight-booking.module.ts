import { BasketComponent } from './../basket/basket.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightService } from './flight-search/flight.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFlightSearchComponent } from "app/flight-booking/reactive-flight-search/reactive-flight-search.component";

@NgModule({
    imports: [
        FormsModule, 
        ReactiveFormsModule,
        CommonModule, 
        SharedModule
    ],
    declarations: [
        BasketComponent,
        FlightSearchComponent,
        PassengerSearchComponent,
        ReactiveFlightSearchComponent
    ],
    providers: [
    ],
    exports: [
        FlightSearchComponent,
        PassengerSearchComponent,
        ReactiveFlightSearchComponent
    ],
})
export class FlightBookingModule { }
