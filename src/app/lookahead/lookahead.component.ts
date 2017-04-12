import { Passenger } from './../entities/passenger';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'lookahead',
    templateUrl: './lookahead.component.html'
})

export class LookaheadComponent implements OnInit {
    constructor(private http: Http) { }

    control: FormControl;
    passengers$: Observable<Passenger[]>;
    loading: boolean = false;

    ngOnInit() { 
        this.control = new FormControl();

        this.passengers$ = this
                            .control
                            .valueChanges
                            .debounceTime(300)
                            .distinctUntilChanged()
                            .do(v => this.loading = true)
                            .switchMap(name => this.load(name))
                            .do(v => this.loading = false);
    }

    load(name)  {
        let url = "http://www.angular.at/api/passenger";
        
        let search = new URLSearchParams();
        search.set('name', name);
        
        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, {search, headers})
                .map(resp => resp.json());
    };

    
}