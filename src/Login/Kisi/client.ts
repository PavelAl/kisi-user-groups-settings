import Kisi from 'kisi-client';

import { LoginInfo } from '../Login.types';

export const kisiClient = new Kisi();

export async function loginKisi(data: LoginInfo) {
    return kisiClient.signIn(data);
}
