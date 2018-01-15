import { Injectable } from '@angular/core';
import { CognitoUtilService } from './cognito-util.service';

import {
  CognitoUserAttribute, CognitoUser, AuthenticationDetails, ICognitoUserData
} from 'amazon-cognito-identity-js';

@Injectable()
export class AuthService {

  constructor(private cUtil: CognitoUtilService) { }

  async signIn(email, pass): Promise<any> {
    const _that = this;
    const authenticationData = {
      Username: email.toLowerCase(),
      Password: pass
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email.toLowerCase(),
      Pool: this.cUtil.getUserPool()
    };
    const cognitoUser = new CognitoUser(userData);

    return new Promise<any>((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          resolve(result);
        },
        onFailure: err => {
          reject(err);
        },
        mfaRequired: codeDeliverDetails => {
          resolve({mfaRequired: true, user: cognitoUser});
        },
        newPasswordRequired: userAttributes => {
          resolve({newPasswordRequired: true, user: cognitoUser});
        }
      });
    });
  }

  async completeNewPasswordChallenge(new_pass, cognitoUser: any): Promise<any> {
    return new Promise<boolean>((resolve, reject) => {
      cognitoUser.completeNewPasswordChallenge(new_pass, null, {
        onSuccess: result => {
          resolve(result);
        },
        onFailure: err => {
          reject(err);
        }
      });
    });
  }

  async sendMFACode(code: string, cognitoUser: any): Promise<boolean> {
    const _that = this;
    return new Promise<boolean>((resolve, reject) => {
      cognitoUser.sendMFACode(code, {
        onSuccess: result => {
          resolve(true);
        },
        onFailure: err => {
          reject(err);
        }
      });
    });
  }

  async signOut(): Promise<any> {
    const cognitoUser = this.cUtil.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.signOut();
      return Promise.resolve();
    } else Promise.reject('Tried to logout a non existing session...');
  }

  async delete(): Promise<any> {
    const _that = this;
    const cognitoUser = this.cUtil.getCurrentUser();

    return new Promise<any>((resolve, reject) => {
      if (cognitoUser != null) {
        cognitoUser.getSession((err1, session) => {
          if (err1) reject(err1);
          else cognitoUser.deleteUser((err2, result) => {
            if (err2) reject(err2);
            else resolve(result);
          });
        });
      } else reject('No sessions found.');
    });

  }

  async isAuthenticated(): Promise<boolean> {
    const cognitoUser = this.cUtil.getCurrentUser();

    const _that = this;
    return new Promise<boolean>((resolve, reject) => {
      if (cognitoUser != null) {
        cognitoUser.getSession(function (err, session) {
          if (err) reject(err);
          else {
            resolve(session.isValid());
          }
        });
      } else {
        reject('No user found.');
      }
    });
  }

  async register(credentials: {email, password, name, allergies, alcohol, vegetarian, message}): Promise<boolean> {
    const _that = this;

    const userPool = this.cUtil.getUserPool();

    const attributeList = [];

    const dataEmail = {
      Name: 'email',
      Value: credentials.email.toLowerCase()
    };

    const dataName = {
      Name: 'name',
      Value: credentials.name
    };

    const dataAllergies = {
      Name: 'custom:allergies',
      Value: credentials.allergies
    };

    const dataAlcohol = {
      Name: 'custom:alcohol',
      Value: credentials.alcohol
    };

    const dataVegetarian = {
      Name: 'custom:vegetarian',
      Value: credentials.vegetarian
    };

    const dataMessage = {
      Name: 'custom:message',
      Value: credentials.message
    };

    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributeName = new CognitoUserAttribute(dataName);
    const attributeAllergies = new CognitoUserAttribute(dataAllergies);
    const attributeAlcohol = new CognitoUserAttribute(dataAlcohol);
    const attributeVegetarian = new CognitoUserAttribute(dataVegetarian);
    const attributeMessage = new CognitoUserAttribute(dataMessage);
    attributeList.push(attributeEmail);
    attributeList.push(attributeName);
    attributeList.push(attributeAllergies);
    attributeList.push(attributeAlcohol);
    attributeList.push(attributeVegetarian);
    attributeList.push(attributeMessage);

    return new Promise<boolean>((resolve, reject) => {
      userPool.signUp(credentials.email.toLowerCase(), credentials.password, attributeList, null, (err, result) => {
        if (err) reject(err);
        else resolve(true);
      });
    });
  }

  async confirm(email, code): Promise<boolean> {
    const _that = this;

    const userPool = this.cUtil.getUserPool();
    const userData: ICognitoUserData = {
      Username: email.toLowerCase(),
      Pool: userPool
    };

    const cognitoUser = new CognitoUser(userData);
    return new Promise<boolean>((resolve, reject) => {
      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  async change(oldpass, newpass): Promise<any> {
    const _that = this;

    const userPool = this.cUtil.getUserPool();
    const cognitoUser = userPool.getCurrentUser();

    return new Promise<any>((resolve, reject) => {
      if (cognitoUser != null) {
        cognitoUser.getSession(function (err1, session) {
          if (err1) reject(err1);
          else cognitoUser.changePassword(oldpass, newpass, function (err2, result) {
            if (err2) reject(err2);
            else resolve(result);
          });
        });
      } else reject('No sessions found.');
    });
  }

  async resend(email): Promise<any> {
    const _that = this;
    const userPool = this.cUtil.getUserPool();
    const userData: ICognitoUserData = {
      Username: email.toLowerCase(),
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    return new Promise<any>((resolve, reject) => {
      cognitoUser.resendConfirmationCode((err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  async forgotSend(email): Promise<any> {
    const _that = this;
    const userPool = this.cUtil.getUserPool();
    const userData: ICognitoUserData = {
      Username: email.toLowerCase(),
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    return new Promise<any>((resolve, reject) => {

      cognitoUser.forgotPassword({
        onSuccess: result => {
          resolve(result);
        },
        onFailure: err => {
          reject(err);
        }
      });
    });
  }

  async forgotChange(email, verificationCode, newPassword): Promise<any> {
    const _that = this;
    const userPool = this.cUtil.getUserPool();
    const userData: ICognitoUserData = {
      Username: email.toLowerCase(),
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    return new Promise<any>((resolve, reject) => {
      cognitoUser.confirmPassword(verificationCode, newPassword, {
        onSuccess: () => {
          resolve();
        },
        onFailure: err => {
          reject(err);
        }
      });
    });
  }

}
