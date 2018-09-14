import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundInterfaceComponent } from './container/pagenotfound-interface/pagenotfound-interface.component';
import { PagenotfoundRoutingModule } from './page-not-found-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, PagenotfoundRoutingModule, HttpClientModule,
    SharedModule
  ],
  declarations: [PagenotfoundInterfaceComponent]
})
export class PageNotFoundModule { }
