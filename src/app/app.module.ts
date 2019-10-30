import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalsService } from './services/festivals.service';
import { GroupByPipe } from './group-by.pipe';
import { FilterPipe } from './filterUnique.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GroupByPipe,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FestivalsService, OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
