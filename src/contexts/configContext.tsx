import React, { createContext } from 'react';

const { Consumer, Provider } = createContext({});

export const ConfigProvider = (): React.ReactElement => {
  return <Provider value={{}}></Provider>;
};

export { Consumer as ConfigConsumer };
