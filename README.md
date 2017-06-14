# Firebase Sample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Pre-requisites

NodeJs - Created with version 6.9.2
Firebase account

## Firebase setup

Create a firebase account on https://firebase.google.com/
Add a new project and navigate to console.

###### Authentication
Click on Sign-in method and enable Google and Email/Password

###### Api Key
1. Click on Web Setup on the top right corner.
2. Copy the json with the api settings. 
3. Open the solution on your IDE. i.e. Visual Studio Code
4. Find the `environment.ts` and `environment.prod.ts` within `src/environments/`
4. Paste the json on firebase key. The environment should look like the following:
```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD0O3_UZoAwJtmHWUrBRBdVQvABz_9VSKc',
    authDomain: 'your-project.firebaseapp.com',
    databaseURL: 'https://your-project.firebaseio.com',
    projectId: 'yourProject',
    storageBucket: 'your-project.appspot.com',
    messagingSenderId: '10563213429869'
  }
};
```

## Build

Run `npm install` to download project dependencies.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.