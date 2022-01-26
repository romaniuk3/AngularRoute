import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryRoutingModule } from './factory-routing.module';
import { FactoryComponent } from './factory.component';


@NgModule({
  declarations: [
    FactoryComponent
  ],
  imports: [
    CommonModule,
    FactoryRoutingModule
  ]
})
export class FactoryModule { }
