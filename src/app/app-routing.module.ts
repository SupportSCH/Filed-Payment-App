import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { MyCartComponent } from './layouts/my-cart/my-cart.component';
import { PaymentPageComponent } from './layouts/payment-page/payment-page.component';


const routes: Routes = [
  {
    path:'',
    component:ToolbarComponent,
    children : [
      {
        path:'',
        component: MyCartComponent
      },
      {
        path: 'payment',
        component: PaymentPageComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
