import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserInterfaceComponent } from './container/user-interface/user-interface.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [UserInterfaceComponent, NavComponent, HeaderComponent, FooterComponent],
  exports: [ UserInterfaceComponent]
})
export class UserInterfaceModule { }
