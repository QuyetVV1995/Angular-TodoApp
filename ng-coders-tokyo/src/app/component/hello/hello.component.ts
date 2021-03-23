import { Component, Input, OnInit, OnChanges, OnDestroy,

  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Output, EventEmitter} from '@angular/core';



@Component({
    selector: 'app-hello',
    template: `<h2> hello from component Hello</h2>
    <p> {{text}} from parent </p>
    <button (click)="onButtonClicked()">Button in Hello </button>
     `
})
export class HelloComponent implements OnInit, OnChanges,
OnDestroy,AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked{

  @Input() text: string;
  // Input: Data tu component Parent sang component Child
  // Output: Event tu component Child sang component Parent
  @Output() buttonClicked: EventEmitter<string> =  new EventEmitter<string>();

  onButtonClicked(){
    this.text = 'Change from Hello Component';
    this.buttonClicked.emit(this.text);

  }

  ngOnInit(): void{
   // console.log('child OnInit ran');
  }

  ngOnDestroy(): void{
   // console.log('child OnDestroy ran');
  }

  ngAfterViewInit(): void{
   // console.log('child AfterViewInit ran');
  }

  ngAfterContentChecked(): void{
   // console.log('child AfterContentChecked ran');
  }

  ngAfterContentInit(): void{
   // console.log('child AfterContentInit ran');
  }

  ngAfterViewChecked(): void{
    //console.log('child AfterViewChecked ran');
  }

  ngOnChanges(): void{
  //  console.log('child OnChange ran');
  }
}
