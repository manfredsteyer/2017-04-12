import { ExitGuard } from './exit/exit.guard';
import { AuthGuard } from './auth/auth.guard';
import { CityAsyncValidationDirective } from './validation/city-async.validation.directive';
import { RoundTripValidationDirective } from './validation/round-trip.validation.directive';
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
        CityValidationDirective,
        RoundTripValidationDirective,
        CityAsyncValidationDirective
    ],
    providers: [
        AuthGuard,
        ExitGuard
    ],
    exports: [
        CityPipe,
        CityValidationDirective,
        RoundTripValidationDirective,
        CityAsyncValidationDirective
    ]
})
export class SharedModule { }
