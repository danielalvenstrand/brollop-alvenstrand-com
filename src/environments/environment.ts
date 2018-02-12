// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  under_construction: false,
  protection_code: '929912',
  guest: {
    email: 'brollop@alvenstrand.com',
    password: '!QAZ2wsx'
  },
  GM_API_KEY: 'AIzaSyBBP_u5ErisRuith55SW9qvMdmMonET1H0',
  INSTA: {
    CLIENT_ID: '89f6fc0a2bea449181f8559b6ded5c7c',
    USER_ID: '10254294',
    ACCESS_TOKEN: '10254294.89f6fc0.72d07b6bb130412b881c3de0f886f54c'
  },
  AWS: {
    REGION: 'eu-west-1',
    USERPOOL_ID: 'eu-west-1_9IgRBExad',
    CLIENT_ID: '7kdt72felslp7j5b5gukrb9h7h'
  }
};
