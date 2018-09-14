import { Prestation } from '../shared/models/prestation';

export const PrestationCollection: Prestation[] = [
  new Prestation({ id : 'Ma prestation 1', client: 'ORANGE', taxe: 19, nb_jours: 10}),
  new Prestation({ id : 'Ma prestation 2', client: 'OBS', taxe: 21, nb_jours: 10}),
  new Prestation(),
  new Prestation({ id : 'Ma prestation 3', client: 'Acoss', taxe: 19, nb_jours: 10})
];
