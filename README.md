
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
2. From IDE terminal run `npm install cypress --save-dev` 
3. Finally open Cypress test runner `npx cypress open`
This creates the Cypress Folder Structure containing the following:
- _fixtures folder:_ Stores test data mostly in .json format
- _integration folder:_ Stores our test files (spec files), by default cypress will install several spec files under `integration/examples folder`.
- _plugins folder_: Extends Cypress functionality, custom plugins
-_support folder_: Stores index.js and commands.js
    - index.js: Very first file Cypress looks at, any code in here is executed before anything else.  Import additional libraries and event listeners.
    - commands.js: Commonly used functions we create to be used throughout our test and override existing Cypress functions.


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

## Turn on IntelliSense for code suggestions and autocompletion :heavy_check_mark:
- You can set this on each individual spec file by using triple slash directive which is specified on your first line of code `/// <reference types="Cypress" />`
- Better approach set this up globally which trickles down to all your spec files, you no longer need to use the triple slash directive per file.  To do this create a jsconfig.json file in the root of the project folder.  Add the following code
```
{
    "include": [
        "./node_modules/cypress",
        "cypress/**/*.js"
    ]
}
```
<img src= "images\2021-05-09_12-56-09.png">

## For my own personal tests I will create a new folder named automationTests under cypress/integration folder :heavy_check_mark:

## Click to view my :point_right:[automationTest001.specjs](https://github.com/DanielRamos84/Cypress-Automation-Udemy-Course/tree/master/cypress/integration/examples/automationTests):point_left:

Topics covered: Basic web element interaction.
- Completing and submitting forms
- Radio button selection and assertion
- Date picker and assertion test
- Table assertion