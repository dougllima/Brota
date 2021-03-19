export type PlantaConfig = {
  cores: {
    colheita: string;
    germinacao: string;
    tempoDeVida: string;
  };
  alertas: {
    colheita: boolean;
    germinacao: boolean;
    tempoDeVida: boolean;
  };
};
