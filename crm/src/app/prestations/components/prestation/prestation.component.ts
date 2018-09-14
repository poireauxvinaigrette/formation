import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrestationInterface } from '../../../shared/interface/prestation-interface';
import { StatePrestation } from '../../../shared/enums/state-prestation.enum';
import { TypePrestation } from '../../../shared/enums/type-prestation.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {

  @Input()  presta: PrestationInterface;
  @Input()  index: number;

  @Output() Out: EventEmitter<any> = new EventEmitter();

  typeOptions = Object.values(TypePrestation);
  stateOptions = Object.values(StatePrestation);

  constructor() { }

  ngOnInit() {
  }

  update(event, type: string) {

    this.Out.emit({prestation: this.presta, type: type, value: event.target.value} );
    /*
    console.log(typeof event);
    console.log( event);
    if (this.presta[type]) {
       this.presta[type] = event.target.value ;
    }
    console.log( this.presta);

    */
  }

}
