import moment from 'moment';
import { Base, Intervalo } from './Base';

export default class Planta extends Base {
  nome?: string;
  familia?: string;
  origem?: string;
  tempoDeVida: Intervalo = {};
  germinacao: Intervalo = {};
  colheita: Intervalo = {};
  clima?: { inicio: number; fim: number };
  iluminacaoPorDia?: moment.Duration;
  obs?: string;

  constructor(data: Partial<Planta> = {}) {
    super(data);
  }
}
