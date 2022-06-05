import { useState, useEffect } from 'react';

import { loginKisi } from './client';
import { testLoginInfo } from './testLoginInfo';

export const useKisiLogin = () => {
  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    (async () => {
      setLogedIn(false);

      await loginKisi(testLoginInfo);

      setLogedIn(true);
    })();
  }, []);

  return logedIn;
};
