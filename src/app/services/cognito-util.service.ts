import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import {
  CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails,
  ICognitoUserPoolData, ICognitoUserData
} from 'amazon-cognito-identity-js';

@Injectable()
export class CognitoUtilService {

  protected _userPool: CognitoUserPool;

  constructor() {
  }

  getUserPool() {
    if (!this._userPool) {
      const poolData: ICognitoUserPoolData = {
        UserPoolId: environment.AWS.USERPOOL_ID,
        ClientId: environment.AWS.CLIENT_ID
      }
      this._userPool = new CognitoUserPool(poolData);
    };

    return this._userPool;
  }

  getCurrentUser() {
    return this.getUserPool().getCurrentUser();
  }

  async getAccessToken(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.getCurrentUser())
        this.getCurrentUser().getSession((err, session) => {
          if (err) reject(err);
          else {
            if (session.isValid()) {
              resolve(session.getAccessToken().getJwtToken());
            } else {
              reject("Got the access token, but the session isn't valid");
            }
          }
        });
      else reject('No current user.');
    });
  }

  async getIdToken(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.getCurrentUser())
        this.getCurrentUser().getSession((err, session) => {
          if (err) reject(err);
          else {
            if (session.isValid()) {
              resolve(session.getIdToken().getJwtToken());
            } else {
              reject("Got the id token, but the session isn't valid");
            }
          }
        });
      else reject('No current user.');
    });
  }

  async getRefreshToken(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.getCurrentUser())
        this.getCurrentUser().getSession((err, session) => {
          if (err) reject(err);
          else {
            if (session.isValid()) {
              resolve(session.getRefreshToken());
            } else {
              reject("Got the refresh token, but the session isn't valid");
            }
          }
        });
      else reject('No current user.');
    });
  }
}

