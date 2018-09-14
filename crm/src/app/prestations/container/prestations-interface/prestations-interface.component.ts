import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { PrestationInterface } from '../../../shared/interface/prestation-interface';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-prestations-interface',
  templateUrl: './prestations-interface.component.html',
  styleUrls: ['./prestations-interface.component.scss']
})
export class PrestationsInterfaceComponent implements OnInit {
  collection: PrestationInterface[];
  headers: string[];


  constructor(private prestationService: PrestationService) {
    this.collection = this.prestationService.collection;
    this.headers = ['Id',
      'Client' ,
      'date début',
      'date fin',
      'tjm',
      'jours',
      'taxe (%)',
      'TotalHT',
      'TotalTTC',
      'status',
      'type',
      'action'
    ]; }

  ngOnInit() {
  }

  update(event) {
    console.log( event.prestation);

    event.prestation[event.type] = event.value;

    console.log(event.prestation);
    // inutile car passage par ref: this.collection[event.prestation.id] = event.prestation;
    console.log(this.collection);
  }

}
