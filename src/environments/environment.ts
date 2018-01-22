// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  under_construction: true,
  protection_code: '929912',
  AWS: {
    REGION: 'eu-west-1',
    USERPOOL_ID: 'eu-west-1_9IgRBExad',
    CLIENT_ID: '7kdt72felslp7j5b5gukrb9h7h'
  }
};
