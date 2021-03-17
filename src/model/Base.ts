import moment from 'moment';

export type Intervalo = {
  inicio?: moment.Duration | moment.Moment;
  fim?: moment.Duration | moment.Moment;
};

export class Base {
  public constructor(data = {}) {
    if (data) {
      this.fromObject(data);
    }
  }

  public fromObject(data = {}, instance = this): Base {
    return Object.assign(instance, JSON.parse(JSON.stringify(data)));
  }
}
