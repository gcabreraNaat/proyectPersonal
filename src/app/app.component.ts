import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sessionActive: boolean = false;

  constructor(
    public _router: Router,
  ) {
    this._router.events.subscribe(val => {
      if (val instanceof NavigationStart) {
        const valString = val.toString();
        this.sessionActive = valString.includes('login');
      }
    });
  }
}
