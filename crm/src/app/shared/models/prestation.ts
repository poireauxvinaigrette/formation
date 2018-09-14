import { PrestationInterface } from '../interface/prestation-interface';
import { TypePrestation } from '../enums/type-prestation.enum';
import { StatePrestation } from '../enums/state-prestation.enum';

export class Prestation implements PrestationInterface {
  id: string;
  type: TypePrestation =  TypePrestation.FORMATION;
  client: string;
  date_debut: string = new Date().toISOString();
  date_fin: string;
  tjm = 0;
  state: StatePrestation = StatePrestation.OPTION;
  nb_jours = 5;
  taxe = 20; // 20%

  tjm_ht = 0;


  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }

  }

  totalHT(): number {
    if (this.nb_jours) {
    return this.tjm_ht * this.nb_jours;
    } else {
      return 0;
    }
  }
  totalTTC(): number {
    return this.totalHT() * (1 + this.taxe / 100);
  }

}
