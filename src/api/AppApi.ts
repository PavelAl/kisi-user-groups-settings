import { createContext, useContext } from 'react';

import { AppApi } from './AppApi.types';
import { kisiAppApi } from './KisiAppApi';

export const AppApiContext = createContext<AppApi>(kisiAppApi);

export const AppApiProvider = AppApiContext.Provider;

export const useAppApi = () => {
    const appApi = useContext(AppApiContext);

    return appApi;
};
