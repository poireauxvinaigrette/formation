import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialbuttonComponent } from './socialbutton/socialbutton.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SocialbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SocialbuttonComponent, AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}


  ngDoBootstrap(app: ApplicationRef) {
    const SocialbuttonElement = createCustomElement(SocialbuttonComponent, { injector : this.injector });
    customElements.define('social-button', SocialbuttonElement);

    if (!environment.production) {
      app.bootstrap(AppComponent);
    }
  }
}
