# Node.js Barebones

Structure for a web API using Node.js and Express.js.

## Structure

      .
      ├── 📂 .github
      |   └── ⬇️ PULL_REQUEST_TEMPLATE.md
      |
      ├── 📂 bin
      |   └── 📄 app.js
      |
      ├── 📂 config
      |   └── 📄 local.js
      |
      ├── 📂 src
      │   ├── 📁 controllers
      |   |
      │   ├── 📂 middlewares
      |   │   ├── 📄 initial.js
      |   │   └── 📄 response-validator.js
      |   |
      │   ├── 📂 routes
      |   │   ├── 📂 v1
      |   |   │   ├── 📄 health.js
      |   |   │   └── 📄 index.js
      |   │   └── 📄 index.js
      |   |
      |   └── 📁 services
      |       └── 📂 v1
      |
      ├── 📂 tests
      │   ├── 📁 functional
      │   ├── 📁 integration
      │   ├── 📁 unit
      │   ├── 🔧 .eslintrc
      |   └── 🔧 mocha.opts
      |
      ├── 🔑 .env.example
      ├── 🔧 .eslintignore
      ├── 🔧 .eslintrc
      ├── 🔧 .gitignore
      ├── 🔧 .nvmrc
      ├── 🔧 buildspec.yml
      ├── 📦 package.json
      └── ️⬇️️ README.md

### Folders

* **.github**: Place GitHub configurations.
* **bin**: Find the wrappers to start the API. Startup scripts on `package.json` point to this folder.
* **config**: This folder contains javascript files that are responsible to read the `.env` file. Get access to the environment variables with `const configs = require('getconfig')`.
* **src**: It has the main code of our API.
  * **controllers**:
  * **middlewares**: Contains Express.js middlewares files.
  * **routes**: Has the routes of our API, such as: `GET /health`.
    * **v1**: We use folders to separate code from different versions of our API.
  * **services**: Contains files that communicate with external APIs. Name a third-party service, e.g.: Facebook's API, just as `facebook.js`. We use the modules [`request`](https://www.npmjs.com/package/request) and [`request-promise`](https://www.npmjs.com/package/request-promise) to make API requests.
    * **v1**: Versioning also applies here but with the third-party APIs version. E.g.: if Facebook's API uses version 5, we need a `v5` folder.
* **tests**: Places all the code for testing our API. Remember that for each type of test all the structure is mapped. E.g.: if you are unit testing a file `src/middlewares/foo.js`, there must have the path `src/middlewares/foo.test.js` inside `/unit` folder. Do not forget to name a test file with the suffix `.test.js`.
  * **functional**: Functional tests go here.
  * **integration**: Integration tests go here. Make use of [Sinon.js](http://sinonjs.org/) module.
  * **unit**: Unit tests go here. Make use of [Mocha.js](https://mochajs.org/) and [Chai.js](http://www.chaijs.com/) module.

### Code

* **bin/app.js**: Startup file for our API. Sets the middlewares for all the routes.
* **config/local.js**: Reads `.env` file and maps the environment variables. If there is a set of environment variables for a specific goal (e.g.: env vars for connecting to Facebook's API) create a new file (`facebook.js`) inside the same folder to map them.
* **src/middlewares/initial.js**: A middleware that sets the initial status of a request for `404`. If the request does not get to any valid route, a "Not found" message is responded.
* **src/middlewares/response-validator.js**: A middleware that validates the response in case of error(s).
* **src/routes/v1/health.js**: Route to check if the API is up and running.
* **src/routes/v1/index.js**: Maps the routes of a given version (`v1` in this case).
* **src/routes/index.js**: Maps the API versions to the correct folder for its routes.

### Configuration Files

* **tests/.eslintrc**: File to configure the linter for the tests.
* **tests/mocha.opts**: Configuration for [Mocha.js](https://mochajs.org/) tests.
* **.eslintrc**: Configuration for the linter in all project (except `/tests` folder). We use the standard configuration [`eslint-config-sunset-nodejs`](https://github.com/SunsetRiders/eslint-config-sunset-nodejs).
* **.gitignore**: File to place the items that `Git` will not consider in the commits.
* **.nvmrc**: Holds the Node.js version of a project. Make use of it by typing `nvm use` in the terminal.
* **buildspec.yml**: File that has the steps for building the project. Used also for continuous integration.

### Other

* **PULL_REQUEST_TEMPLATE.md**: Template displayed on [GitHub](https://github.com) for when opening a _Pull Request_
* **.env.example**: File that holds the sample of environment variables. With the command `cp .env.example .env` you will be able to start the API (`npm start`) based on `.env` file.
* **package.json**: File with the scripts and dependencies of the API.
