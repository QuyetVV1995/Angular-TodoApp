import { Component, Input, OnInit, OnChanges, OnDestroy,

  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit} from '@angular/core';


@Component({
    selector: 'app-hello',
    template: `<h2> hello from component Hello</h2>
    <p> {{text}} from parent </p>
     `
})
export class HelloComponent implements OnInit, OnChanges,
OnDestroy,AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked{

  @Input() text: string;

  ngOnInit(): void{
    console.log('child OnInit ran');
  }

  ngOnDestroy(): void{
    console.log('child OnDestroy ran');
  }

  ngAfterViewInit(): void{
    console.log('child AfterViewInit ran');
  }

  ngAfterContentChecked(): void{
    console.log('child AfterContentChecked ran');
  }

  ngAfterContentInit(): void{
    console.log('child AfterContentInit ran');
  }

  ngAfterViewChecked(): void{
    console.log('child AfterViewChecked ran');
  }

  ngOnChanges(): void{
    console.log('child OnChange ran');
  }
}
