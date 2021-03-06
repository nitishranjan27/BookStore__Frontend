import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GetallbookComponent } from './getallbook/getallbook.component';
import { GetcartComponent } from './getcart/getcart.component';
import { LoginComponent } from './login/login.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'register',component: RegisterComponent},
  {path:'login',component:LoginComponent},
  {path: 'forgot',component:ForgotpasswordComponent},
  {path: 'reset/:token',component:ResetpasswordComponent},
  {path:'', redirectTo:"/login", pathMatch:'full' },
  {path:'dashboard',component:DashboardComponent,
  children: [
    { path: '', redirectTo: '/dashboard/getallbook', pathMatch: 'full' },
    { path: 'getallbook',component:GetallbookComponent},
    { path: 'quickview',component:QuickviewComponent},
    { path: 'getcart',component:GetcartComponent },
    { path: 'placeOrder', component:PlaceOrderComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
