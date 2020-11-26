import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';


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
