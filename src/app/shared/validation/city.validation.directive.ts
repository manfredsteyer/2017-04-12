import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive({ 
    selector: 'input[city]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator {
    
    constructor() { }

    @Input() city: string;

    validate(control: AbstractControl): any {

        let allowedCities = this.city.split(',');

        let actualCity = control.value;

        if (allowedCities.indexOf(actualCity) > -1) {
            return { };
        }

        return {
            city: {
                actual: actualCity,
                allowed: allowedCities,
                reason: 42
            }
        }

    }



}

