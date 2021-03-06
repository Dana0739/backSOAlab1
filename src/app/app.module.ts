import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkerComponent } from './worker/worker.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
