import Capsula from './Capsula';

export default class Brota {
  capsulas: Capsula[] = [];

  public constructor(data = {}) {
    if (data) {
      this.fromObject(data);
    }
  }

  public fromObject(data = {}, instance = this): void {
    Object.assign(instance, data);
  }
}
