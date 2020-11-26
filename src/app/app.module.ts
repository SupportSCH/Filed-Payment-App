import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/card-detail.reducer';

import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { MyCartComponent } from './layouts/my-cart/my-cart.component';
import { PaymentPageComponent } from './layouts/payment-page/payment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MyCartComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      cards: reducer
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
