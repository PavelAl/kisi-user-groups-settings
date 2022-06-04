import createCache from '@emotion/cache';
import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

export const muiCache = createCache({
    key: 'mui',
    prepend: true
});
export const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
