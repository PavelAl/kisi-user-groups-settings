import { CircularProgress } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { LoginStatus } from '../Login.types';

interface Props {
  loginHook: () => LoginStatus;
}

export const LoginContainer: FC<PropsWithChildren<Props>> = ({ loginHook, children }) => {
  const loginStatus: LoginStatus = loginHook();

  if (loginStatus) return <>{children}</>;
  else return <CircularProgress />;
};
