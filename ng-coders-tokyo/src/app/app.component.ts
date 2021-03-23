import { Component } from '@angular/core';

@Component({
  // app root là element tag trên html
  selector: 'app-root',
  template: `
  <!-- String Interpolation de hien thi bien title -->


<!-- cach 1  <h1 [ngStyle]="{color:textColor, background: bgColor}"> {{title}} <h1> -->
 <!-- cach 2 <h1 [ngStyle]="styleObj"> {{title}} <h1> -->
  <h1 [class.with-border]="withBorder"
  (mouseover)="onTextMouseOver()"
  (mouseout)="onTextMouseOut()"
   > {{title}}</h1>
    <button (click)="onButtonClick()">{{withBorder ? 'Hide' : 'Show'}} Border</button>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodersTokyo';

  textColor = 'tomato';
  bgColor = 'black';

  styleObj = {color: this.textColor, background: this.bgColor};

  withBorder = true;

  onButtonClick(){
    console.log('Button clicked');
    this.withBorder = !this.withBorder; //toggle
  }

  onTextMouseOver(){
    this.textColor = 'blue';
  }

  onTextMouseOut(){
    this.textColor = 'tomato';
  }
}


// Data Binding
// 1.PropertyBinding: bing nhung bien trong Component ra template
// 2.EventBinding: Khi nguoi dung tuong tac voi template(click, scoll...)

