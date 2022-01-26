import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersDetailComponent } from './workers-detail/workers-detail.component';
import { FactoryDetailComponent } from './factory-detail/factory-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WorkersDetailComponent,
    FactoryDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
