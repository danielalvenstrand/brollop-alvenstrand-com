import { Injectable } from '@angular/core';
import { CognitoUtilService } from './cognito-util.service';

export interface UserAttributes {
  name: string;
  email: string;
  message: string;
  vegetarian: string;
  alcohol: string;
  allergies: string;
}

@Injectable()
export class UserService {

  private _userAttributes: UserAttributes;

  constructor(private cUtil: CognitoUtilService) { }

  async getAttributes(): Promise<UserAttributes> {
    const cognitoUser = this.cUtil.getCurrentUser();

    const _that = this;
    return new Promise<any>((resolve, reject) => {
      if (cognitoUser != null) {
        cognitoUser.getSession(function (err, session) {
          if (err) reject(err);
          else if (!_that._userAttributes) {
            cognitoUser.getUserAttributes((error, result) => {
              if (error) reject(error);
              else {
                const attributes = {};
                result.map(attr => {
                  attributes[attr['Name'].replace('custom:', '')] = attr['Value'];
                  return;
                });
                resolve(attributes);
              }
            })
          } else {
            resolve(_that._userAttributes);
          }
        });
      } else {
        reject('No user found.');
      }
    });
  }

}
