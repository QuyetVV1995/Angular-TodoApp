import { Component } from '@angular/core';

@Component({
  // app root là element tag trên html
  selector: 'app-root',
  template: `<app-hello></app-hello>
    <app-hi></app-hi>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-coders-tokyo';
}
