import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppProps } from './App.types';
import { useGroups, useGroupsNavigation } from './Groups/hooks';
import { GroupDetailsPage } from './Groups/pages/GroupDetailsPage';
import { GroupsPage } from './Groups/pages/GroupsPage';
import { useKisiLogin } from './Login';
import { LoginContainer } from './Login/LoginContainer';
import { appUrls } from './services';

const GroupsPageContainer = () => <GroupsPage useGroups={useGroups} useGroupSelected={useGroupsNavigation} />;
const GroupDetailsPageContainer = () => <GroupDetailsPage />;

export const App: FC<AppProps> = () => {
  return (
    <LoginContainer loginHook={useKisiLogin}>
      <Routes>
        <Route path={appUrls.home} element={<GroupsPageContainer />} />

        <Route path={appUrls.groups} element={<GroupsPageContainer />} />

        <Route path={appUrls.groupDetails} element={<GroupDetailsPageContainer />} />
      </Routes>
    </LoginContainer>
  );
};
