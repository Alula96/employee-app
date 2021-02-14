# EmployeeApp

Application to manage employees

---

## Requirements

For development, you will need the next tools installed in your environment:

- [Node.js](https://nodejs.org/es/)
- [Angular CLI](https://cli.angular.io/)

### Recommended facilities

- [TypeScript](http://www.typescriptlang.org/)
- [Google Chrome](https://www.google.es/chrome/browser/desktop/)

### Text editor

The editor used to develop this project is: [Visual Studio Code](https://code.visualstudio.com/).

### Recommended plugins

- Angular 2 TypeScript Emmet
- Angular 8 Snippets – TypeScript, Html...
- Angular Language Service
- Angular v8 Snippets
- HTML CSS Support
- JavaScript (ES6) code snippets
- JS-CSS-HTML Formatter
- Prettier – Code Formatter
- TypeScript Hero
- TypeScript Importer

---

## Installations

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.16.1

    $ npm --version
    6.13.4

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

#### Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    git pull
    npm prune
    npm install

To run those 3 commands you can just do

    npm run pull

---

## Angular CLI

Para instalar angular CLI debes tener instalado previamente Node.js y ejecutar el siguiente comando:

    npm install -g @angular/cli

Para más información ingresa [aquí](https://angular.io/cli).

---

## Instalation

To install the project, you should follow the next steps:

    git clone https://github.com/Alula96/employee-app.git
    cd employee-app
    npm install

---

## Run the server

To run the server, you should execute in shell:

    ng serve -o

More information: [https://angular.io/cli/serve](https://angular.io/cli/serve).

**Note:** When executing this previous command without any additional parameter, it will take the configuration specified in `src/environments/enviroment.ts`.

---

## Settings

### Environments

These configurations are in the **src/environments** folder, currently it has the following profiles defined in the following files:

- Local: `src/environments/environments.ts`
- Development: `src/environments/environments.dev.ts`
- QA: `src/environments/environments.qa.ts`
- Production: `src/environments/environments.prod.ts`

Each configuration defines:

- Indicator to know if it is a production configuration.
- Profile name.
- Backend api endpoint.

Each configuration is specified in the `angular.json` file in the `configurations` section:

```
    "configurations": {
        "dev": {
            ...
        },
        "qa": {
            ...
        },
        "prod": {
            ...
        },
    }
```

### Folder aliases

An alias is used for the folders: `src/app/`, `src/environments/` and `src/constants/`. These aliases are in the `tsconfig.json` file:

```
  "paths": {
    "@app/*": ["src/app/*"],
    "@env/*": ["src/environments/*"],
    "@const/*": ["src/constants/*"],
  }
```

---
  
## Additional components

Application's additional components:

- [angular-material](https://material.angular.io/): Material Design components for Angular.

---

## Security

This application is not assured.

---

## Testing execution

To run the project tests, you should run in console:

    ng test

### Code coverage

To know the coverage that the project has, you must execute:

    ng test --no-watch --code-coverage

More information: [https://angular.io/cli/serve](https://angular.io/cli/serve)

---

## Sonarqube

### Setting's file

The application integration settings with Sonarqube can be found in the file: `sonar-project.properties`.

Additionally, the `sonar` command was added to the `package.json` file.

```
"scripts": {
    ...
    "sonar": "sonar-scanner"
  }
```

### Run

To execute the sonarqube tests you must run:

  npm run sonar

---

## Build the project

To build the project, you should execute in shell the next command:

    ng build

**Note:** The settings used by default are those found in `src/environments/environments.ts`.

To specify the configuration, it must be included in with the configuration parameter, such as:

    ng build --configuration=dev
    ng build --configuration=prod

More information: [https://angular.io/cli/build](https://angular.io/cli/build).

---

## Languages & tools

### Typescript

- [Angular](https://angular.io/) It is used to build the UI.
- [ESLint](https://eslint.org/) It is used to find and solve problems in your typescript or javascript code.

### Styles

- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) as the preferred model layout.
- [BEM](http://getbem.com/introduction/) to name the css classes.
- [SASS](https://sass-lang.com/documentation) to preprocess the css classes.

### Tools

- [Prettier](https://sass-lang.com/documentation) as a code formatter.

### Methodologies

- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) To build the components.
- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) To structure scss files.

**Note:** Always make sure to use good practices.

---

## What's inside?

### Folder structure

A look at the top-level files and directories you'll see in this project.

```
    .
    ├── e2e/
    |   ├── src/
    |   |   ├── app.e2e-spec.ts
    |   |   └── app.po.ts
    |   ├── protractor.conf.js
    |   └── tsconfig.json
    ├── node_modules/
    ├── src/
    |   ├── app/
    |   |   ├── atoms/
    |   |   ├── directives/
    |   |   ├── helpers/
    |   |   ├── models/
    |   |   ├── molecules/
    |   |   ├── organisms/
    |   |   ├── pages/
    |   |   ├── pipes/
    |   |   ├── services/
    |   |   ├── shared/
    |   |   ├── templates/
    |   |   ├── app.component.ts
    |   |   ├── app.component.html
    |   |   ├── app.component.css
    |   |   ├── app.component.spec.ts
    |   |   └── app.module.ts
    |   ├── assets/
    |   |   ├── fonts/
    |   |   ├── icons/
    |   |   └── images/
    |   ├── constants/
    |   ├── environments/
    |   ├── theme/
    |   |   ├── elements/
    |   |   ├── generic/
    |   |   ├── settings/
    |   |   ├── tools/
    |   |   ├── utilities/
    |   |   └── vendor/
    |   ├── favicon.ico
    |   ├── index.html
    |   ├── main.ts
    |   ├── polyfills.ts
    |   ├── styles.scss
    |   └── test.ts
    ├── .editorconfig
    ├── .gitignore
    ├── angular.json
    ├── browserslist
    ├── karma.conf.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.spec.json
    └── tslint.json
```

1. **`/e2e`**: contains source files for a set of end-to-end tests that correspond to the root-level application, along with test-specific configuration files.

    1. **`/src`**: This directory contain end-to-end tests for my-app.

    2. **`/protractor.conf.js`**: Test-tool config.

    3. **`/tsconfig.json`**: TypeScript config inherits from workspace.

2. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3. **`/src`**: This directory contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

    1. **`/app`**: Contains the component files in which your application logic and data are defined. This components are split using atomic design standard.

        1. **`/atoms`**: Place where you can place the smallest components of your application. Basically, they can be texts, buttons, form inputs and so on. **The golden rule is: if you can't split a component into smaller components then it must be an atom.**

        2. **`/directives`**: Place where you can place your custom directives.

        3. **`/helpers`**: Place where you can place small snippets you can use throughout the application. Small functions to build bigger things with.

        4. **`/models`**: Save classes and interfaces which represents data object which can be used for transferring data in application

        5. **`/molecules`**: Place where you can place the components who are combinations of atoms bonded together. For example, if you have Text and Input atoms, you can combine them into a InputField (or whatever name you want) molecule.

        6. **`/organisms`**: Place where you can place the components who are combinations of molecules: if you mix two or more molecules you get an organism.

        7. **`/pages`**: Pages to be render in project.

        8. **`/pipes`**: Place where you can place your custom pipes.

        9. **`/services`**: This directory contains all application services.

        10. **`/shared`**: This directory contains all modules shared in application like angular material module.

        11. **`/templates`**: Place where you can place the application layouts. These are combinations of organisms.

        12. **`/app.component.ts`**: Defines the logic for the app's root component, named AppComponent. The view associated with this root component becomes the root of the [view hierarchy](https://angular.io/guide/glossary#view-hierarchy) as you add components and services to your application.

        13. **`/app.component.html`**: Defines the HTML template associated with the root AppComponent.

        14. **`/app.component.css`**: Defines the base CSS stylesheet for the root AppComponent.

        15. **`/app.component.spec.ts`**: Defines a unit test for the root AppComponent.

        16. **`/app.module.ts`**: Defines the root module, named AppModule, that tells Angular how to assemble the application. Initially declares only the AppComponent. As you add more components to the app, they must be declared here.

    2. **`/assets`**: Contains image and other asset files to be copied as-is when you build your application.

    3. **`/constants`**: This directory contain all application constants files.

    4. **`/environments`**: Contains build configuration options for particular target environments. By default there is an unnamed standard development environment and a production ("prod") environment. You can define additional target environment configurations.

    5. **`/theme`**: SASS application styles.

        1. **`/elements`**: Styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.

        2. **`/generic`**: Reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.

        3. **`/settings`**: Used with preprocessors and contain font, colors definitions, etc.

        4. **`/tools`**: Globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.

        5. **`/utilities`**: Utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class.

        6. **`/utilities`**: This folder is used to save imported component's styles like the angular material customization file.

    6. **`/favicon.ico`**: An icon to use for this application in the bookmark bar.

    7. **`/index.html`**: The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building your app, so you typically don't need to add any `<script>` or `<link>` tags here manually.

    8. **`/main.ts`**: The main entry point for your application. Compiles the application with the JIT compiler and bootstraps the application's root module (AppModule) to run in the browser. You can also use the AOT compiler without changing any code by appending the --aot flag to the CLI build and serve commands.

    9. **`/polyfills.ts`**: Provides polyfill scripts for browser support.

    10. **`/styles.sass`**: Lists CSS files that supply styles for a project. The extension reflects the style preprocessor you have configured for the project.

    11. **`/test.ts`**: The main entry point for your unit tests, with some Angular-specific configuration. You don't typically need to edit this file.

4. **`.editorconfig`**: Configuration for code editors. See [EditorConfig](https://editorconfig.org/)

5. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6. **`README.md`**: A text file containing useful reference information about your project.

7. **`angular.json`**: CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as [TSLint](https://palantir.github.io/tslint/), [Karma](https://karma-runner.github.io/), and [Protractor](http://www.protractortest.org/). For details, see [Angular Workspace Configuration](https://angular.io/guide/workspace-config).

8. **`package-lock.json`**: (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

9. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

10. **`tsconfig.json`**: Default [TypeScript](https://www.typescriptlang.org/) configuration for projects in the workspace.

11. **`tslint.json`**: Default [TSLint](https://palantir.github.io/tslint/) configuration for projects in the workspace.

12. **`sonar-project.properties`**: File where the sonarqube config are specified.

---

## Frequent commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

