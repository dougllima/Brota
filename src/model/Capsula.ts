import { Intervalo } from './Base';
import moment from 'moment';
import Plantas from '../assets/data/Plantas';
import Planta, { NOMES_PLANTAS } from './Planta';

export default class Capsula {
  planta: NOMES_PLANTAS = NOMES_PLANTAS.alecrim;
  dataPlantio?: moment.Moment;
  diasGerminacao: Intervalo = {};
  diasColheita: Intervalo = {};
  tempoDeVida: Intervalo = {};

  constructor(data: Partial<Capsula> = {}) {
    if (data) {
      this.fromObject(data);
    }

    if (data.dataPlantio) {
      this.calculaPrazos();
    }
  }

  public calculaPrazos(): void {
    if (!this.planta || !this.dataPlantio) {
      return;
    }

    this.diasColheita = this.somaDatas(
      this.dataPlantio,
      (Plantas[this.planta] as Planta).colheita,
    );

    this.diasGerminacao = this.somaDatas(
      this.dataPlantio,
      (Plantas[this.planta] as Planta).germinacao,
    );

    this.tempoDeVida = this.somaDatas(
      this.dataPlantio,
      (Plantas[this.planta] as Planta).tempoDeVida,
    );
  }

  public fromObject(data = {}, instance = this): void {
    Object.assign(instance, data);
  }

  private somaDatas(data: moment.Moment, intervalo: Intervalo): Intervalo {
    const result = {} as Intervalo;
    let dataAux = data.clone();

    if (intervalo?.inicio) {
      result.inicio = dataAux.add(intervalo?.inicio as moment.Duration);
    }
    dataAux = data.clone();

    if (intervalo.fim) {
      result.fim = dataAux.add(intervalo?.fim as moment.Duration);
    }

    return result;
  }
}
