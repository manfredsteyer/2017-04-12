import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'flight-edit',
    template: `<h1>Flight Edit!</h1>
        <p>ID: {{id}}</p>
    `
})
export class FlightEditComponent implements OnInit {
    
    constructor(private route: ActivatedRoute) { }
    
    id: string;
    showDetails: string;
    ngOnInit() { 

        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.showDetails = p['showDetails'];
            // Erste Näherung: Datensatz anhand Id laden
        });

        //this.route.queryParams
    }
}