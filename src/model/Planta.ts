import { Base } from './Base';

type Periodos = 'horas' | 'dias' | 'meses' | 'anos';

type Tempo = {
  valor: number;
  unidade?: Periodos;
};

type Intervalo = {
  inicio?: Tempo | number;
  fim?: Tempo | number;
};

type Iluminacao = Tempo | { valor: Intervalo; unidade: Periodos };

export default class Planta extends Base {
  nome?: string;
  familia?: string;
  origem?: string;
  tempoDeVida?: Intervalo;
  germinacao?: Intervalo;
  colheita?: Intervalo;
  clima?: Intervalo;
  iluminacaoPorDia?: Iluminacao;
  obs?: string;

  constructor(data: Partial<Planta> = {}) {
    super(data);
  }
}
