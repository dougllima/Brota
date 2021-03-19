import moment from 'moment';
import { Observable, of } from 'rxjs';
import { minhasPlantinhas } from '../assets/data/Plantas';

import Brota from '../model/Brota';
import Capsula from '../model/Capsula';

export default (): Observable<Brota> => {
  const result: Capsula[] = [];
  minhasPlantinhas.forEach(item =>
    result.push(
      new Capsula({
        planta: item,
        dataPlantio: moment('13/03/2021', 'DD/MM/YYYY'),
      }),
    ),
  );
  return of(new Brota({ capsulas: result }));
};
