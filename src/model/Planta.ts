import moment from 'moment';
import { Intervalo } from './Base';

export default class Planta {
  nome?: string;
  familia?: string;
  origem?: string;
  tempoDeVida: Intervalo = {};
  germinacao: Intervalo = {};
  colheita: Intervalo = {};
  clima?: { inicio: number; fim: number };
  iluminacaoPorDia?: moment.Duration;
  obs?: string;

  public constructor(data = {}) {
    if (data) {
      this.fromObject(data);
    }
  }

  public fromObject(data = {}, instance = this): void {
    Object.assign(instance, data);
  }
}
