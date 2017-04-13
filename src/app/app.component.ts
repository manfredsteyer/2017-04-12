import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo Welt!';

  constructor(router: Router) {
    router.events.subscribe(e => console.debug('router event', e));
  }

}
