import createCache from '@emotion/cache';
import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppApiProvider, defaultAppApi } from './api';
import App from './App';

import './index.css';

export const muiCache = createCache({
  key: 'mui',
  prepend: true
});
export const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppApiProvider value={defaultAppApi}>
      <App />
    </AppApiProvider>
  </BrowserRouter>
);
