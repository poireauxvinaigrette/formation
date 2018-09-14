import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInterfaceComponent } from './container/login-interface/login-interface.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule, LoginRoutingModule
  ],
  declarations: [LoginInterfaceComponent]
})
export class LoginModule { }
