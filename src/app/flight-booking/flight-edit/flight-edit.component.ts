import { Flight } from './../../entities/flight';
import { FlightService } from './../flight-search/flight.service';
import { Observable, Observer } from 'rxjs';
import { CanComponentDeactivate } from './../../shared/exit/exit.guard';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'flight-edit',
    template: `<h1>Flight Edit!</h1>

        <div *ngIf="warning.showWarning" class="alert alert-warning">
            <div>
            Daten wurden nicht gespeichert! Trotzdem Maske verlassen?
            </div>
            <div>
                <a href="javascript:void(0)" (click)="decide(true)" class="btn btn-danger">Ja</a>
                <a href="javascript:void(0)" (click)="decide(false)" class="btn btn-default">Nein</a>
            </div>
        </div>


        <p>ID: {{id}}</p>
        <p>{{flight.from}} - {{flight.to}} am {{flight.date | date:'dd.MM.yyyy HH:mm'}}</p>
    
    `
})
export class FlightEditComponent implements OnInit, CanComponentDeactivate {
    
    constructor(
        private route: ActivatedRoute,
        private flightService: FlightService) { }
    
    id: string;
    showDetails: string;
    flight: Flight;
    
    warning = {
        sender: null,
        showWarning: false
    }

    decide(decision: boolean) {
        this.warning.showWarning = false;
        this.warning.sender.next(decision);
        this.warning.sender.complete();
    }

    canDeactivate() {
        return Observable.create((sender: Observer<boolean>) => {
            this.warning.sender = sender;
            this.warning.showWarning = true;
        });
    }

    ngOnInit() { 

        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.showDetails = p['showDetails'];
        });

        this.route.data.subscribe(d => {
            this.flight = d['flight'];
        })

        //this.route.queryParams
    }
}