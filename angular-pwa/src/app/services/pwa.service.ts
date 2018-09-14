import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PwaService {

  constructor(public update: SwUpdate) {

    // Check s'il y a une maj ttes les 10s
    interval(1000 * 10).subscribe( () => {
    console.log('...checkForUpdate()...');
    this.update.checkForUpdate();
    });

    //
    this.update.available.subscribe( (version) => {
      console.log('la version actuelle est ', version.current);
      console.log('la version actuelle est ', version.available);
      this.update.activateUpdate().then( () => window.location.reload() );
    });
    this.update.activated.subscribe( (version) => {
      console.log('l\'ancienne version etait ', version.previous);
      console.log('la version actuelle est', version.current);
    });
   }
}
