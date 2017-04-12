import { LookaheadComponent } from './lookahead/lookahead.component';
import { BasketComponent } from './basket/basket.component';
import { EventService } from './event.service';
import { DemoComponent } from './demo/demo.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CityPipe } from './shared/pipes/city.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlightBookingModule
  ], 
  declarations: [
    // Shell
    LookaheadComponent,
    AppComponent,
    DemoComponent
  ],
  providers: [
    EventService
    // { provide: FlightService, useClass: FlightService }
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
