import { TestBed, inject } from '@angular/core/testing';

import { CognitoUtilService } from './cognito-util.service';

describe('CognitoUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitoUtilService]
    });
  });

  it('should be created', inject([CognitoUtilService], (service: CognitoUtilService) => {
    expect(service).toBeTruthy();
  }));
});
