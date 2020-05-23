# PwaAngular9

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Store-1

First step: create actions, effect, reducer, selector for simple json structure:
`settings: {
  "theme": 11,
  "categories": [1,2,3,4,5,6,8],
  "language": "eng"
}`

Result: App component `OnInit` ----> Load action is dispatched ----> Data are sent from BE ----> Data is put to ngrx/store
        Selector is subscribed to (ngrx/store).settings

## Store-2

Second step: update action, effect, reducer for simple json structure was added.

Result: App component text area JSON could be modified by user ----> Save button allows to change settings data in ngrx/store ----> Selector automatically updates data in the App component
