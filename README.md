
# Ngx-Admin Angular 8 application from akveo.com
This is modified and more lightweight version of original application to practice UI Automation with Cypress.

**The original repo is here: https://github.com/akveo/ngx-admin**

## Get started deploying the application locally:heavy_check_mark:

1. Fork the repo
2. From IDE terminal run `npm install`
3. From IDE termina run `npm start`

Application should be accessible via localhost :clap::thumbsup::clap:

## Install and run Cypress Test Runner:heavy_check_mark:
1. We'll install using npm, cd into your project directory from IDE terminal
2. From IDE terminal run `npm install cypress --save-dev` This creates the Cypress Folder Structure containing the following:
- _fixtures folder:_ Stores test data mostly in .json format
- _integration folder:_ Stores our test files (spec files), by default cypress will install several spec files under `integration/examples folder`.
3. Finally open Cypress test runner `npx cypress open`

## A little bit of housekeeping before setting up our own tests :heavy_check_mark:
- Open cypress.json file and add the baseUrl so we don't have to specify this on each of our tests
- The built in examples that Cypress provides are great, but sometimes they're distracting. What we can do is add the following code to our `cypress.json` file. When you open Cypress runner you will not see any of the built in examples
- Finally change the viewport settings
```
{
    "baseUrl": "http://localhost:4200/",
    "ignoreTestFiles": "**/examples/*",
    "viewportHeight": 1080,
    "viewportWidth": 1920
}
```

## Click to view my first :point_right:[firsttest.spec.js](https://github.com/DanielRamos84/Cypress-Automation-Udemy-Course/tree/master/cypress/integration/New%20folder):point_left:

topics covered: Basic web element interaction.
- Completing and submitting forms
- Radio button selection and assertion
- Date picker and assertion test
- Table assertion

## Click to view my :point_right:[testWithPageObjects.js](https://github.com/DanielRamos84/Cypress-Automation-Udemy-Course/tree/master/cypress/integration):point_left:
- We'll go through each of the menu options assert the form has the expected text as well as the correct URL
