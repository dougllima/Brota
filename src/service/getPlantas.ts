import { Observable, of } from 'rxjs';
import plantas from '../assets/data/Plantas';
import { ListaPlantas } from '../model/Planta';

export default (): Observable<ListaPlantas> => {
  return of(plantas);
};
