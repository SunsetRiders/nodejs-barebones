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
* **bin**: Find the wrappers to start the API. Startup scripts on `package.json` points to this folder.
* **config**: This folder contains javascript files that are responsible to read the `.env` file. Get access to the environment variables with `const configs = require('getconfig')`.
* **src**: It has the main code of our API.
  * **controllers**:
  * **middlewares**: Contains Express.js middlewares files.
  * **routes**: Has the routes of our API, such as: `GET /health`.
    * **v1**: We use folders to separate code from different versions of our API.
  * **services**: Contains files that communicates with external APIs. Name a third-party service, e.g.: Facebook's API, just as `facebook.js`.
    * **v1**: Versioning also applies here but with the third-party APIs version. E.g.: if Facebook's API uses version 5, we need a `v5` folder.
* **tests**: Places all the code for tesing our API. Remember that for each type of test all the structure is mapped. E.g.: if you are unit testing a file `src/middlewares/foo.js`, there must have the path `src/middlewares/foo.js` inside `/unit` folder.
  * **functional**: Functional tests go here.
  * **integration**: Integration tests go here. Make use of [Sinon.js](http://sinonjs.org/) module.
  * **unit**: Unit tests go here. Make use of [Mocha.js](https://mochajs.org/) and [Chai.js](http://www.chaijs.com/) module.

### Code

* **bin/app.js**: Startup file for our API. Sets the middlewares for all the routes.
* **config/local.js**: Reads `.env` file and maps the environment variables. If there is a set of environment variables for a specific goal (e.g.: env vars for connecting to Facebook's API) create a new file (`facebook.js`) inside the same folder to map them.
* **src/middlewares/initial.js**:
* **src/middlewares/response-validator.js**:
* **src/routes/v1/health.js**:
* **src/routes/v1/index.js**:
* **src/routes/index.js**:

### Configuration Files

* **tests/.eslintrc**:
* **tests/mocha.opts**:
* **.eslintignore**:
* **.eslintrc**:
* **.gitignore**:
* **.nvmrc**:
* **buildspec.yml**:

### Other

* **PULL_REQUEST_TEMPLATE.md**:
* **.env.example**:
* **package.json**:
