import { LoginInfo, UserCredentials } from '../Login.types';

export const testDomain = 'test-task';
export const testUser: UserCredentials = {
  email: 'testaccount+8@kisi.io',
  password: '4cd25800'
};

export const testLoginInfo: LoginInfo = {
  domain: testDomain,
  ...testUser
};
