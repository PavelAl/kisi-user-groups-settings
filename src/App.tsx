import { FC } from 'react';

import { HelloVite } from '~/components/HelloVite';

import { AppProps } from './App.types';
const App: FC<AppProps> = () => {
  return (
    <div className="App">
      <HelloVite />
    </div>
  );
};

export default App;
