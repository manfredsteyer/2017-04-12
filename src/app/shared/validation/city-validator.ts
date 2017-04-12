import { Subject } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CityValidator {

    static validateCity(cities: string[]): ValidatorFn {
        return (c: AbstractControl): ValidationErrors => {

            if (cities.indexOf(c.value) > -1) {
                return { }
            }

            return {
                city: true
            }

        } 
    }

    static roundTrip(c: AbstractControl): ValidationErrors {

        let group = c as FormGroup;
        
        let fromControl = group.controls['from'];
        let toControl = group.controls['to'];

        if (!fromControl || !toControl) return {};

        if (fromControl.value == toControl.value) {
            return { roundTrip: true };
        }

        return { };
    }

    static asyncCity(control: AbstractControl): Promise<ValidationErrors> {

        return new Promise<ValidationErrors>((resolve: Function) => {

            // Async,
            // Event-Handler: resolve({ });
            setTimeout(() => {
                resolve({ cityAsync: true });
            }, 3000); 

        })

    }


}