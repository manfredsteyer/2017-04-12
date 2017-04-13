import { BasketComponent } from './basket/basket.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { ReactiveFlightSearchComponent } from './flight-booking/reactive-flight-search/reactive-flight-search.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
    },
    {
        path: 'basket',
        component: BasketComponent,
        outlet: 'aux'
    },
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
