import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GetallbookComponent } from './getallbook/getallbook.component';
import { LoginComponent } from './login/login.component';
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
    { path: '', redirectTo: 'getallbook', pathMatch: 'full', },
    { path: 'getallbook',component:GetallbookComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
