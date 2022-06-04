import { FC } from 'react';

import { AppApiProvider, kisiAppApi } from './api';
import { AppProps } from './App.types';
import { GroupsPage } from './Groups/pages/GroupsPage';
import { useKisiLogin } from './Login';
import { LoginContainer } from './Login/LoginContainer/LoginContainer';

const App: FC<AppProps> = () => {
    return (
        <div className="App">
            <AppApiProvider value={kisiAppApi}>
                <LoginContainer loginHook={useKisiLogin}>
                    <GroupsPage />
                </LoginContainer>
            </AppApiProvider>
        </div>
    );
};

export default App;
