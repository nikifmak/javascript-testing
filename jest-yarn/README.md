# Jest + Yarn

In this section, we are gonna use [Jest]( https://facebook.github.io/jest/) **testing framework** which is recommended by Facebook. On its core it wraps [Jasmine](https://jasmine.github.io) and adds features on the top of it. As node package manager we will use [Jarn](https://yarnpkg.com/en/docs/install) **dependency manager** which is also a Facebook project. More info on:

>  https://facebook.github.io/jest/

> https://yarnpkg.com/en/docs/install



## Testing existing javascript code with tests in separate files

### Steps

First things first, lets create a folder:

> ```Bash
> mkdir yest-yarn
> cd yest-yarn
> ```

Initialize an npm repository: 

> ```Shell
> yarn init -y
> ```

Install the npm package Jest: 

> ```Bash
> yarn add --dev jest
> ```

Add to the `package.json` the following section:

> ```json
> {
>   "scripts" : {
>     "test": "jest"
>   }
> }
> ```

Now we can run our tests by simply typing `npm test` in the command line.

Now let's write our first test. The [Jest](https://yarnpkg.com/en/docs/install) documentation provides an example with a function that adds two numbers, so let's use that for our first test. First we need to create the **`sum.js`** file:

> ```Bash
> touch sum.js
> ```

It contains pure vanilla javascript and we also export the module that contains the functions so that we can use it on other javascript files by including/importing/requiring it.

> ```javascript
> function sum(a, b) {
>   return a + b;
> }
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

Now we can run our test so we type to the command line:

> ```Bash
> npm test
>
> ➜  jest-yarn git:(master) ✗ npm test
>
> > jest-yarn@1.0.0 test /Users/nikif/Desktop/javascript-testing/jest-yarn
> > jest
>
>  PASS  ./sum.test.js
>   ✓ adds 1 + 2 to equal 3 (4ms)
>
> Test Suites: 1 passed, 1 total
> Tests:       1 passed, 1 total
> Snapshots:   0 total
> Time:        1.102s
> Ran all test suites.
> ```

## Testing code directly 

Jest will test any file that contains `test` in its filename.

Lets create a new file: 

> ```Bash
> touch array.test.js
> ```

> ```javascript
> const fruits = [
>   'apple',
>   'banana',
>   'grapes',
>   'kiwi',
>   'watermelon'
> ];
>
> test('fruit array/list has kiwi', () => {
>   expect(fruits).toContain('kiwi')
> });
> ```

It works fine just like before and now Jest tests 2 files:

> ```bash
> npm test
> ➜  jest-yarn git:(master) ✗ npm test
>
> > jest-yarn@1.0.0 test /Users/nikif/Desktop/javascript-testing/jest-yarn
> > jest
>
>  PASS  ./sum.test.js
>  PASS  ./array.test.js
>
> Test Suites: 2 passed, 2 total
> Tests:       2 passed, 2 total
> Snapshots:   0 total
> Time:        1.051s
> Ran all test suites.
> ```

Of course we can add multiple tests on the same file:

> ```javascript
> const fruits = [
>   'apple',
>   'banana',
>   'grapes',
>   'kiwi',
>   'watermelon'
> ];
>
> test('fruit array/list has kiwi', () => {
>   expect(fruits).toContain('kiwi')
> });
>
> test('get a Uppercase list of the first letter of fruit list', () => {
>   expect(fruits.map(function(item) {
>     return item[0].toUpperCase();
>   }))
>   .toEqual(['A', 'B', 'G', 'K', 'W']);
> });
>
> test('Fruit list uppercase first letter', () => {
>   expect(fruits.map(function(string) {
>     return string[0].toUpperCase() + string.slice(1);
>   }))
>   .toEqual(['Apple', 'Banana', 'Grapes', 'Kiwi', 'Watermelon']);
> });
> ```

Lets do the testing:

> ```bash
> npm test
>
> ➜  jest-yarn git:(master) ✗ npm test
>
> > jest-yarn@1.0.0 test /Users/nikif/Desktop/javascript-testing/jest-yarn
> > jest
>
>  PASS  ./array.test.js
>  PASS  ./sum.test.js
>
> Test Suites: 2 passed, 2 total
> Tests:       4 passed, 4 total
> Snapshots:   0 total
> Time:        1.063s
> Ran all test suites.
> ```

