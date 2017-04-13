import { FlightEditComponent } from './../../flight-booking/flight-edit/flight-edit.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


export interface CanComponentDeactivate {
    canDeactivate: () => any;
}

@Injectable()
export class ExitGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate,    
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        
        return component.canDeactivate();

    }
}