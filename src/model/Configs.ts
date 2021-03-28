export class PlantaConfig {
  cores?: {
    colheita: string;
    germinacao: string;
    tempoDeVida: string;
  };
  alertas?: {
    colheita: boolean;
    germinacao: boolean;
    tempoDeVida: boolean;
  };

  constructor(data: Partial<PlantaConfig> = {}) {
    if (data) {
      this.fromObject(data);
    }
  }

  public fromObject(data = {}, instance = this): void {
    Object.assign(instance, data);
  }
}
