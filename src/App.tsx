import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppApiProvider, kisiAppApi } from './api';
import { AppProps } from './App.types';
import { useGroups } from './Groups/hooks';
import { GroupDetailsPage } from './Groups/pages/GroupDetailsPage';
import { GroupsPage } from './Groups/pages/GroupsPage';
import { useKisiLogin } from './Login';
import { LoginContainer } from './Login/LoginContainer/LoginContainer';
import { appUrls } from './services/urls';

const App: FC<AppProps> = () => {
    return (
        <BrowserRouter>
            <AppApiProvider value={kisiAppApi}>
                <LoginContainer loginHook={useKisiLogin}>
                    <Routes>
                        <Route
                            path={appUrls.home}
                            element={<GroupsPage useGroups={useGroups} />}
                        />

                        <Route
                            path={appUrls.groups}
                            element={<GroupsPage useGroups={useGroups} />}
                        >
                            <Route
                                path={appUrls.group}
                                element={<GroupDetailsPage />}
                            />
                        </Route>
                    </Routes>
                </LoginContainer>
            </AppApiProvider>
        </BrowserRouter>
    );
};

export default App;
