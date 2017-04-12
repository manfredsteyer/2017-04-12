import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";

@Directive({ 
    selector: 'input[cityAsync]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: CityAsyncValidationDirective,
            multi: true
        }
    ]
})
export class CityAsyncValidationDirective implements AsyncValidator {
    
    constructor() { }

    validate(control: AbstractControl): Promise<ValidationErrors> {

        return new Promise<ValidationErrors>((resolve: Function) => {

            // Async,
            // Event-Handler: resolve({ });
            setTimeout(() => {
                resolve({ cityAsync: true });
            }, 3000); 

        })

    }



}

