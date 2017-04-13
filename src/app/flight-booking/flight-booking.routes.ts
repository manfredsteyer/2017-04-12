import { FlightEditResolver } from './flight-edit/flight-edit.resolver';
import { ExitGuard } from './../shared/exit/exit.guard';
import { AuthGuard } from './../shared/auth/auth.guard';
import { FlightBookingComponent } from './flight-booking.component';
import { Component } from '@angular/core';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { Routes, RouterModule } from '@angular/router';


const FLIGHT_BOOKING_ROUTES: Routes = [
    
        {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
                    {
                    path: 'flight-booking',
                    component: FlightBookingComponent,
                    children: [
                        {
                            path: 'flight-search',
                            component: FlightSearchComponent
                        },
                        {
                            path: 'reactive-flight-search',
                            component: ReactiveFlightSearchComponent
                        },
                        {
                            path: 'flight-edit/:id',
                            component: FlightEditComponent,
                            canDeactivate: [ExitGuard],
                            resolve: {
                                flight: FlightEditResolver
                            }
                        },
                        {
                            path: 'passenger-search',
                            component: PassengerSearchComponent
                        }
                    ]
                    
                },
            ]
        }


];

export const FlightBookingRouterModule = 
                RouterModule.forChild(FLIGHT_BOOKING_ROUTES);