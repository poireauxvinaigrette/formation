import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsInterfaceComponent } from './container/prestations-interface/prestations-interface.component';
import { PrestationRoutingModule } from './prestations-routing.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './container/add-prestation/add-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [PrestationsInterfaceComponent, PrestationComponent, AddPrestationComponent]
})
export class PrestationsModule { }
