import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // khai báo các Component tại đây
    AppComponent
  ],
  imports: [
    // Giống import các thư viện
    BrowserModule
  ],
  // Khai báo các thư viện sử dung
  providers: [],
  //
  bootstrap: [AppComponent]
})
export class AppModule { }
