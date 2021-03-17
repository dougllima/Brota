import { Base } from './Base';
import Capsula from './Capsula';

export default class Brota extends Base {
  capsulas?: Capsula[] = [];

  constructor(data: Partial<Brota> = {}) {
    super(data);
  }
}
