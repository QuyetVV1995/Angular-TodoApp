import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { HiComponent } from './component/hi/hi.component';

@NgModule({
  declarations: [
    // khai báo các Component tại đây
    AppComponent,
    HelloComponent,
    HiComponent
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
