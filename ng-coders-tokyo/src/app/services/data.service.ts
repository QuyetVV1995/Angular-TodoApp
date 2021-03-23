import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'  // golbal
})  // Dependency Injection -> Design Pattern
export class DataService{
  private _textFromHello: string;

  get textFromHello(): string{
    return this._textFromHello;
  }

  setTextFromHello(text: string){
    this._textFromHello = text;
  }
}

