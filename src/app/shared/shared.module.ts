import { CityValidationDirective } from './validation/city.validation.directive';
import { CityPipe } from './pipes/city.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        CityValidationDirective
    ],
    providers: [],
    exports: [
        CityPipe,
        CityValidationDirective
    ]
})
export class SharedModule { }
