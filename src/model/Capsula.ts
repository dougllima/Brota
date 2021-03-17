import { Base, Intervalo } from './Base';
import moment from 'moment';
import Planta from './Planta';

export default class Capsula extends Base {
  planta?: Planta;
  dataPlantio?: moment.Moment;
  diasGerminacao: Intervalo = {};
  diasColheita: Intervalo = {};
  tempoDeVida: Intervalo = {};

  constructor(data: Partial<Capsula> = {}) {
    super(data);

    if (data.dataPlantio) {
      this.calculaPrazos();
    }
  }

  public calculaPrazos(): void {
    if (!this.planta || !this.dataPlantio) {
      return;
    }

    this.diasColheita = this.somaDatas(this.dataPlantio, this.planta.colheita);

    this.diasGerminacao = this.somaDatas(
      this.dataPlantio,
      this.planta.germinacao,
    );

    this.tempoDeVida = this.somaDatas(
      this.dataPlantio,
      this.planta.tempoDeVida,
    );
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
