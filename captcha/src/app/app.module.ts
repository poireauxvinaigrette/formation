import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { CaptchaComponent } from './captcha/captcha.component';

import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CaptchaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CaptchaComponent, AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}


  ngDoBootstrap(app: ApplicationRef) {
    const SocialbuttonElement = createCustomElement(CaptchaComponent, { injector : this.injector });
    customElements.define('my-captcha', SocialbuttonElement);

    if (!environment.production) {
      app.bootstrap(AppComponent);
    }
  }

 }
