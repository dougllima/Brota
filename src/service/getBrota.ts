import moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Brota from '../model/Brota';
import Capsula from '../model/Capsula';
import Planta from '../model/Planta';
import getPlantas from './getPlantas';

export default (): Observable<Brota> => {
  return getPlantas().pipe(
    map((plantas: Planta[]): Capsula[] => {
      return plantas.map(
        item =>
          new Capsula({
            planta: item,
            dataPlantio: moment('13/03/2021', 'DD/MM/YYYY'),
          }),
      );
    }),
    map(
      (capsulas: Capsula[]): Brota => {
        return new Brota({ capsulas });
      },
    ),
  );
};
