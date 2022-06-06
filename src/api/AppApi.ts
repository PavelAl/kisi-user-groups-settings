import { createContext, useContext } from 'react';

import { kisiAppApi } from '~/Kisi';

import { AppApi } from './AppApi.types';

export const AppApiContext = createContext<AppApi>(kisiAppApi);

export const AppApiProvider = AppApiContext.Provider;

export const useApi = () => {
  const appApi = useContext(AppApiContext);

  return appApi;
};
