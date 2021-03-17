import Planta from '../model/Planta';
import { Observable, of } from 'rxjs';
import plantas from '../assets/data/Plantas';

export default (): Observable<Planta[]> => {
  return of(plantas);
};
