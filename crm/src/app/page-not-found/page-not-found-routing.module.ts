import { RouterModule, Route, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagenotfoundInterfaceComponent } from './container/pagenotfound-interface/pagenotfound-interface.component';


const appRoutes: Routes = [

  {path: '**', component: PagenotfoundInterfaceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports : [RouterModule]
})
export class PagenotfoundRoutingModule { }
