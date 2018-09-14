import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'prestations', loadChildren: './prestations/prestations.module#PrestationsModule'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
