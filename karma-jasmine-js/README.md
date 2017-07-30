# Karma - Jasmine-js

In this section we are going to see how to setup a javascript testing environment with [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io).

> https://karma-runner.github.io/1.0/index.html
>
> https://jasmine.github.io

## Karma - Spectacular Test Runner for JavaScript 

About:

> Karma is a direct product of the [AngularJS team](https://googletesting.blogspot.com/2012/11/testacular-spectacular-test-runner-for.html) from struggling to test their own framework features with existing tools. As a result of this, they made Karma and rightly suggest it as their preferred test runner within the AngularJS [documentation](https://docs.angularjs.org/guide/unit-testing). Karma also provides you options to replace Jasmine with other testing frameworks such as [Mocha](https://mochajs.org/) and [QUnit](https://qunitjs.com/) or integrate with various continuous integration services like [Jenkins](https://jenkins.io/), [TravisCI](https://travis-ci.org/), or [CircleCI](https://circleci.com/).

From the AngularJS team:

> [Karma](http://karma-runner.github.io/) is a JavaScript command line tool that can be used to spawn a web server which loads your application's source code and executes your tests. You can configure Karma to run against a number of browsers, which is useful for being confident that your application works on all browsers you need to support. Karma is executed on the command line and will display the results of your tests on the command line once they have run in the browser.
>
> Karma is a NodeJS application, and should be installed through npm/yarn.

From karma's GitHub page:

> ## When should I use Karma?
>
> - You want to test code in *real* browsers.
> - You want to test code in multiple browsers (desktop, mobile, tablets, etc.).
> - You want to execute your tests locally during development.
> - You want to execute your tests on a continuous integration server.
> - You want to execute your tests on every save.
> - You love your terminal.
> - You don't want your (testing) life to suck.
> - You want to use [Istanbul](https://github.com/gotwarlost/istanbul) to automagically generate coverage reports.
> - You want to use [RequireJS](http://requirejs.org/) for your source files.

Also: 

> ## But I still want to use _insert testing library_
>
> Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like. There are already plugins for most of the common testing frameworks:
>
> - [Jasmine](https://github.com/karma-runner/karma-jasmine)
> - [Mocha](https://github.com/karma-runner/karma-mocha)
> - [QUnit](https://github.com/karma-runner/karma-qunit)
> - and [many others](https://www.npmjs.org/browse/keyword/karma-adapter)
>
> If you can't find an adapter for your favourite framework, don't worry and write your own. It's not that hard and we are here to help.

## Setup

First let's create our project:

> ```shell
> mkdir karma-jasmine-js
> cd karma-jasmine-js
> ```

Now we initialize the nodejs packages and **`package.json`** with:

> ```shell
> npm init -y
> ```

The first package we need is the **`karma`** package:

> ```shell
> npm install --save-dev karma
> ```

Next will be the **`karma-jasmine`** plugin and the **`jasmine-core`**:

> ```shell
> npm install karma-jasmine jasmine-core --save-dev
> ```

Karma supports multiple browsers so we can also install a plugin for chrome:

> ```shell
> npm install karma-chrome-launcher --save-dev
> ```

### [Karma config](https://karma-runner.github.io/1.0/config/configuration-file.html)

#### Overview

As is stated in karma's docs:

> In order to serve you well, Karma needs to know about your project in order to test it and this is done via a configuration file. The easiest way to generate an initial configuration file is by using the `karma init` command. This page lists all of the available configuration options.
>
> #### Note: 
>
> Most of the framework adapters, reporters, preprocessors and launchers need to be loaded as 
>
> plugins.

> ## Overview
>
> In order to serve you well, Karma needs to know about your project in order to test it and this is done via a configuration file. The easiest way to generate an initial configuration file is by using the `karma init` command. This page lists all of the available configuration options.
>
> #### Note: Most of the framework adapters, reporters, preprocessors and launchers need to be loaded as [plugins](https://karma-runner.github.io/1.0/config/plugins.html).
>
> The Karma configuration file can be written in JavaScript, CoffeeScript, or TypeScript and is loaded as a regular Node.js module.
>
> Unless provided as argument, the Karma CLI will look for a configuration file at
>
> - `./karma.conf.js`
> - `./karma.conf.coffee`
> - `./karma.conf.ts`
> - `./.config/karma.conf.js`
> - `./.config/karma.conf.coffee`
> - `./.config/karma.conf.ts`
>
> in that order.
>
> Within the configuration file, the configuration code is put together by setting `module.exports` to point to a function which accepts one argument: the configuration object.
>
> ```json
> // karma.conf.js
> module.exports = function(config) {
>   config.set({
>     basePath: '../..',
>     frameworks: ['jasmine'],
>     //...
>   });
> };
> ```

#### Config

So let's create the `karma.config.js`:

> ```shell
> ./node_modules/karma/bin/karma init
> ```

Or 

> Typing `./node_modules/karma/bin/karma start` sucks and so you might find it useful to install `karma-cli` globally. You will need to do this if you want to run Karma on Windows from the command line.
>
> ```
> $ npm install -g karma-cli
> ```

Create a configuration file for Karma using its built-in utility. On the command line, go to the folder for this exercise and run `karma init`. This will ask you a series of questions:

1. For the framework, press Tab until you see `Jasmine`
2. For the files, we will enter `js/**/*.js` and `test/**/*.test.js` (matching the folders where we put our unit and unit test code, with `**` meaning “include all subfolders”)
3. For the browser, select whichever you have installed. Note that browser names in the configuration file are case-sensitive, for example `Chrome`, `IE`, or `Firefox`, whereas in their related npm package names they're lower case.
4. Accept the defaults for everything else. 

Again, see [karma-jasmine-cli](https://github.com/Microsoft/cordova-samples/tree/master/unit-testing/karma-jasmine-cli) for the full sample code including a configuration file.

> ```shell
> ➜  karma-jasmine-js git:(master) ✗ ./node_modules/karma/bin/karma init
>
> Which testing framework do you want to use ?
> Press tab to list possible options. Enter to move to the next question.
> > jasmine
>
> Do you want to use Require.js ?
> This will add Require.js plugin.
> Press tab to list possible options. Enter to move to the next question.
> > no
>
> Do you want to capture any browsers automatically ?
> Press tab to list possible options. Enter empty string to move to the next question.
> > Chrome
> >
>
> What is the location of your source and test files ?
> You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
> Enter empty string to move to the next question.
> > js/**/*.js
> 30 07 2017 20:05:54.814:WARN [init]: There is no file matching this pattern.
>
> > test/**/*.test.js
> 30 07 2017 20:06:15.384:WARN [init]: There is no file matching this pattern.
>
> Should any of the files included by the previous patterns be excluded ?
> You can use glob patterns, eg. "**/*.swp".
> Enter empty string to move to the next question.
> >
>
> Do you want Karma to watch all the files and run the tests on change ?
> Press tab to list possible options.
> > yes
>
>
> Config file generated at "/Users/nikif/Desktop/javascript-testing/karma-jasmine-js/karma.conf.js".
> ```

#### Generated karma.config.js 

Now the we can see the **`karma.confing.js`** on our project folder:

> ```javascript
> // Karma configuration
> module.exports = function(config) {
>   config.set({
>
>     // base path that will be used to resolve all patterns (eg. files, exclude)
>     basePath: '',
>
>
>     // frameworks to use
>     // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
>     frameworks: ['jasmine'],
>
>
>     // list of files / patterns to load in the browser
>     files: [
>       'js/**/*.js',
>       'test/**/*.test.js'
>     ],
>
>
>     // list of files to exclude
>     exclude: [
>     ],
>
>
>     // preprocess matching files before serving them to the browser
>     // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
>     preprocessors: {
>     },
>
>
>     // test results reporter to use
>     // possible values: 'dots', 'progress'
>     // available reporters: https://npmjs.org/browse/keyword/karma-reporter
>     reporters: ['progress'],
>
>
>     // web server port
>     port: 9876,
>
>
>     // enable / disable colors in the output (reporters and logs)
>     colors: true,
>
>
>     // level of logging
>     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
>     logLevel: config.LOG_INFO,
>
>
>     // enable / disable watching file and executing tests whenever any file changes
>     autoWatch: true,
>
>
>     // start these browsers
>     // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
>     browsers: ['Chrome'],
>
>
>     // Continuous Integration mode
>     // if true, Karma captures browsers, runs the tests and exits
>     singleRun: false,
>
>     // Concurrency level
>     // how many browser should be started simultaneous
>     concurrency: Infinity
>   })
> }
> ```

## Run config

Next step will be to tell **`karma`** to start with the configutarion of**`karma.config.js`**. So we the following property to the **`package.json`** :

> ```json
> "scripts": {
>   "test": "./node_modules/karma/bin/karma start karma.conf.js"
> }
> ```
>
> or if have install the karma cli:
>
> ```json
> "scripts": {
>   "test": "karma start karma.conf.js"
> }
> ```

Let's create the source and test folders as well as some javascript files:

> ```shel
> mkdir js test
> ```

## Writing our tests

Let's create a **`helloWorld.js`** on **`/js`**  folder and the respective **`test/helloWorld.test.js `**: 

> ```shell
> touch js/helloWorld.js test/helloWorld.js
> ```

Remember that we have defined:

> ```json
> files: [
>       'js/**/*.js',     ---> source folder
>       'test/**/*.test.js'   ----> test folder
>     ],
> ```

helloWorld.js:

> ```javascript
> function helloWorld() {
>   return "hello world";
> }
> ```

and helloWorld.test.js in which we use Jasmine's expect:

> ```javascript
> describe("Hello world", function() {
>   it("says hello world", function() {
>     expect(helloWorld()).toEqual("hello world");
>   });
>   
>   it("says hello world as string", function() {
>     expect(helloWorld()).toContain("hell");
>   });
> })
> ```

Let's run our tests:

> ```shell
> npm test
>
> ➜  karma-jasmine-js git:(master) ✗ npm test
>
> > karma-jasmine-js@1.0.0 test /Users/nikif/Desktop/javascript-testing/karma-jasmine-js
> > ./node_modules/karma/bin/karma start karma.conf.js
>
> 30 07 2017 21:28:52.787:WARN [karma]: No captured browser, open http://localhost:9876/
> 30 07 2017 21:28:52.801:INFO [karma]: Karma v1.7.0 server started at http://0.0.0.0:9876/
> 30 07 2017 21:28:52.801:INFO [launcher]: Launching browser Chrome with unlimited concurrency
> 30 07 2017 21:28:52.822:INFO [launcher]: Starting browser Chrome
> 30 07 2017 21:28:54.183:INFO [Chrome 59.0.3071 (Mac OS X 10.12.6)]: Connected on socket FJyDU3Wx4P4FpXncAAAA with id 32857845
> Chrome 59.0.3071 (Mac OS X 10.12.6): Executed 2 of 2 SUCCESS (0.014 secs / 0.006 secs)
> ```

Note that **Karma** launches a **Chrome** instance. Karma runs the tests on chrome and reports the results. We could have chosen a Mozilla/Safari or whatever testing environmnent to test our code.