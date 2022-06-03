import { FC } from 'react';

import { AppProps } from './App.types';
import { GroupsPage } from './Groups/pages/GroupsPage';
import { useKisiLogin } from './Login';
import { LoginContainer } from './Login/LoginContainer/LoginContainer';

const App: FC<AppProps> = () => {
  return (
    <div className="App">
      <LoginContainer loginHook={useKisiLogin}>
        <GroupsPage />
      </LoginContainer>
    </div>
  );
};

export default App;
