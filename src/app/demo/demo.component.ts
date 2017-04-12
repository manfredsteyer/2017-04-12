import { Observable, Subscription } from 'rxjs'; // Schlechte Variante, Wenig Aufwand, Große Bundles
// import { Observable } from 'rxjs/Observable'; // Gute Variante, Viel Aufwand, Kleines Bundles


import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'demo',
    template: `
        <h1>Demo</h1>
        <p>
            {{ time$ | async | date:'HH:mm:ss' }}
        </p>
    `
})

export class DemoComponent implements OnInit, OnDestroy {
    constructor() { }

    time$: Observable<Date>;
    sub: Subscription;

    ngOnInit() { 

        let time$ = Observable
                        .interval(1000)
                        .startWith(0)
                        .map(value => new Date(value * 1000))
                        .do(value => { 
                            console.debug('New date', value);
                        })
                        .publish();
        
        time$.connect();

        this.time$ = time$;  

        this.sub = this.time$.subscribe( value => {
            console.debug('tick/tack');
        })
    }

    ngOnDestroy() {
        // Aufräumen!!!
        this.sub.unsubscribe();
        
    }
}