import React, { createContext, useEffect, useState } from 'react';
import { minhasPlantinhas } from '../assets/data/Plantas';
import { PlantaConfig } from '../model/Configs';
import { NOMES_PLANTAS } from '../model/Planta';

const { Consumer, Provider } = createContext({});
const initialState = {} as Record<NOMES_PLANTAS, PlantaConfig>;

export const ConfigProvider = (): React.ReactElement => {
  const [configPlantas, setConfigPlantas] = useState<
    Record<NOMES_PLANTAS, PlantaConfig>
  >(initialState);

  useEffect(() => {
    setConfigPlantas((config: Record<NOMES_PLANTAS, PlantaConfig>) => {
      minhasPlantinhas.map(nome => {
        config[nome] = new PlantaConfig();
      });
      return config;
    });
  }, []);

  return <Provider value={{ configPlantas, setConfigPlantas }}></Provider>;
};

export { Consumer as ConfigConsumer };
