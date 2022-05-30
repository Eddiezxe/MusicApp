import Realm from 'realm';
import {appID, baseUrl} from '../realm.json';

if (!appId) {
    throw 'Missing Realm App ID. Set appId in realm.json';
  }
  if (!baseUrl) {
    throw 'Missing Realm base URL. Set baseUrl in realm.json';
  }

const appConfig = {
    id: appID,
    baseUrl,
};

export const realmApp = new Realm.App(appConfig);
console.log(appConfig);