import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {CurrecyExchangerComponent} from "../../components/currecy-exchanger/currecy-exchanger.component";
import {HttpClientModule} from "@angular/common/http";
import {BarChartModule, LineChartModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CurrecyExchangerComponent,
    HttpClientModule,
    LineChartModule,
    BarChartModule
  ],
  providers: [
  ]
})
export class AboutModule { }
