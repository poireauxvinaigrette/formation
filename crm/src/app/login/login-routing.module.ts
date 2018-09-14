import { RouterModule, Route, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginInterfaceComponent } from './container/login-interface/login-interface.component';



const appRoutes: Routes = [

  {path: 'login', component: LoginInterfaceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports : [RouterModule]
})
export class LoginRoutingModule { }
