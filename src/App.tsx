import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppProps } from './App.types';
import { GroupDetailsPage } from './Groups/pages/GroupDetailsPage';
import { GroupsPage } from './Groups/pages/GroupsPage';
import { useKisiLogin } from './Login';
import { LoginContainer } from './Login/LoginContainer';
import { appUrls } from './services';

export const App: FC<AppProps> = () => {
  return (
    <LoginContainer loginHook={useKisiLogin}>
      <Routes>
        <Route path={appUrls.home} element={<GroupsPage />} />

        <Route path={appUrls.groups} element={<GroupsPage />} />

        <Route path={appUrls.groupDetails} element={<GroupDetailsPage />} />
      </Routes>
    </LoginContainer>
  );
};
