# Jest + NPM + ES6

In this section, we are gonna use [Jest]( https://facebook.github.io/jest/) **testing framework** with node package manager ([npm](https://www.npmjs.com)). We also gonna add support for ES6 or EcmaScript2015 which is widely used  (e.g. [React ](https://facebook.github.io/react/)) through the [Babel ](https://babeljs.io) compiler.

>  https://facebook.github.io/jest/

> https://www.npmjs.com

> https://babeljs.io

## Testing existing javascript code with tests in separate files

Similarly to **Jest + Yarn** section:

> ```Bash
> mkdir yest-npm-es6
> cd yest-npm-es6
> ```

> ```Bash
> npm init -y
> ```

> ```Bash
> npm install --save-dev jest
> ```

> ```json
> // package.json 
> {
>   "scripts" : {
>     "test": "jest"
>   }
> }
> ```

### Using Babel

To use [Babel](https://babeljs.io),  **babel-jest** package is needed which install by default when we install Jest. If we wanted explicitly to install **babel-jest** then we will do the following: 

> ```bash
> npm install --save-dev babel-jest // for npm 3, npm 4 and yarn
> ```

> ```bash
> npm install --save-dev babel-jest regenerator-runtime // for npm 2
> ```

Next we need to install the **babel-preset-2015** package:

> ```bash
> npm install --save-dev babel-preset-es2015
> ```

As always, to use babel transpiler we also need a **`.babelrc`** file in our project's root folder:

> ```bash
> touch .babelrc
> ```

> ```json
> // .babelrc
> {                                                   {
>   "presets" : ["es2015"]               OR             "presents" : ["es2015", "react"]
> }                                                   }
> ```

Jest will now read our babel config and it will automatically transform our code  as defined in the presets.

Lets create our first js file:

> ```Bash
> touch sum.js
> ```

We will use the same sum function but instead will be written in ES6 syntax:

> ```javascript
> const sum = (a, b) = > a + b
> module.exports = sum;
> ```

**Jest** associates the js files with its respective tests by adding **`.test`** before the **`.js`** suffix of the javascript files. In our case, the tests for the **`sum.js`** will be in a file named **`sum.test.js`** . So let's create it:

> ```Bash
> touch sum.test.js
> ```

Inside it, we can write our tests:

> ```javascript
> const sum = require('./sum');
>
> test('adds 1 + 2 to equal 3', () => {
>   expect(sum(1, 2)).toBe(3);
> });
> ```

Now we can run our tests.  command line:

> ```bash
> npm test
> ```
