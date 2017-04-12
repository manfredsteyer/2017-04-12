import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormGroup } from "@angular/forms";

@Directive({ 
    selector: 'form[roundTrip]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RoundTripValidationDirective,
            multi: true
        }
    ]
})
export class RoundTripValidationDirective implements Validator {
    
    constructor() { }


    validate(control: AbstractControl): any {

        let group = control as FormGroup;

        let fromCtrl = group.controls['from'];
        let toCtrl = group.controls['to'];

        if (!fromCtrl || !toCtrl) return { };

        if (fromCtrl.value == toCtrl.value) {
            return { 'roundTrip': true };
        }

        return { };
    }



}

