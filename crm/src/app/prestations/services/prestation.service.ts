import { Injectable } from '@angular/core';
import { PrestationInterface } from '../../shared/interface/prestation-interface';
import { PrestationCollection } from '../fakeCollection';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection: PrestationInterface[];

  public get collection(): PrestationInterface[] {
    return this._collection;
  }
  public set collection(value: PrestationInterface[]) {
    this._collection = value;
  }



  constructor() {
    this._collection = PrestationCollection;
   }

   add(prestation: PrestationInterface) {
      this._collection.push(prestation);

   }


}
