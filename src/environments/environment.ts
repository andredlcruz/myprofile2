// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  
    firebase: {
    apiKey: "AIzaSyA1tdxUcgu7O-pcJUHeWMV4r4VS4hMzGBk",
    authDomain: "myprofile-dre.firebaseapp.com",
    databaseURL: "https://myprofile-dre.firebaseio.com",
    projectId: "myprofile-dre",
    storageBucket: "myprofile-dre.appspot.com",
    messagingSenderId: "533966672439"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
