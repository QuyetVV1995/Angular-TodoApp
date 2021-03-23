import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'  // golbal
})  // Dependency Injection -> Design Pattern
export class DataService{
  private _textFromHelloSubject: BehaviorSubject<string> =  new BehaviorSubject<string>('');

  textFromhello$: Observable<string> = this._textFromHelloSubject.asObservable();


  setTextFromHello(text: string){
    this._textFromHelloSubject.next(text);
  }
}

