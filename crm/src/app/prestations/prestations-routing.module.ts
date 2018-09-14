import { RouterModule, Route, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PrestationsInterfaceComponent } from './container/prestations-interface/prestations-interface.component';
import { AddPrestationComponent } from './container/add-prestation/add-prestation.component';


const appRoutes: Routes = [

  {path: '', component: PrestationsInterfaceComponent},
  {path: 'add', component : AddPrestationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports : [RouterModule]
})
export class PrestationRoutingModule { }
