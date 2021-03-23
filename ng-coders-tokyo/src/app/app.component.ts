import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

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
    <app-hello [text]="title"></app-hello>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges,
  OnDestroy,AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  title = 'CodersTokyo';

  textColor = 'tomato';
  bgColor = 'black';

  styleObj = {color: this.textColor, background: this.bgColor};

  withBorder = true;

  onButtonClick(){
    this.withBorder = !this.withBorder; //toggle
    this.title = 'Changed'

  }

  onTextMouseOver(){
    this.textColor = 'blue';
  }

  onTextMouseOut(){
    this.textColor = 'tomato';
  }

  ngOnInit(): void{
    console.log('parent OnInit ran');
  }

  ngOnDestroy(): void{
    console.log('parent OnDestroy ran');
  }

  ngAfterViewInit(): void{
    console.log('parent AfterViewInit ran');
  }

  ngAfterContentChecked(): void{
    console.log('parent AfterContentChecked ran');
  }

  ngAfterContentInit(): void{
    console.log('parent AfterContentInit ran');
  }

  ngAfterViewChecked(): void{
    console.log('parent AfterViewChecked ran');
  }

  ngOnChanges(): void{
    console.log('parent OnChange ran');
  }


}


// Data Binding
// 1.PropertyBinding: bing nhung bien trong Component ra template
// 2.EventBinding: Khi nguoi dung tuong tac voi template(click, scoll...)

