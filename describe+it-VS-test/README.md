# Describe + It vs Test blocks

There are 2 ways of writing testing blocks in javascript. Let's consider the following code we want to test:

> ```javascript
> const sum = (a, b) => a + b;
> ```

## Test Block  

> ```javascript
> test('sum function 1 + 2', () =>{
>   expect(sum(1, 2)).toBe(3);
> });
> test('sum function 2 + 3', () =>{
>   expect(sum(2, 3)).toBe(5);
> });
> ```

The `test` block is straightforward as we just write our test cases. On the other hand, if we want a more descriptive way,  `describe + it ` block should be used.

## Describe + It Block

From a stackoverflow answer:

> `describe` breaks your test suite into components. Depending on your test strategy, you might have a describe for each function in your class, each module of your plugin, or each user-facing piece of functionality.

> `it` is where you perform individual tests. You should be able to describe each test like a little sentence, such as "it calculates the area when the radius is set". You shouldn't be able to subdivide tests further-- if you feel like you need to, use `describe` instead.

1. `describe()` is merely for grouping, which you can nest as deep
2.  `it()` is a test case
3. `before()`, `beforeEach()`, `after()`, `afterEach()` are hooks to run  before/after first/each it() or describe().

 Which means, `before()` is run before first it()/describe()

### Example 1:

```javascript
describe('Circle class', function() {
  describe('area is calculated when', function() {
    it('sets the radius', function() { ... });
    it('sets the diameter', function() { ... });
    it('sets the circumference', function() { ... });
  });
});
```

### Example 2:

> A great guide from https://gist.github.com/samwize/8877226

```javascript
// should.js is the preferred assertion library
var should = require('should');

// **Only 1 test case (in a nameless test suite)**
it('birds should fly', function(){
  /** here.should.be.tested
    * However, as long as no error within a it(),
    * it() is considered PASSED */
})


// **Only 1 test case, but nested 3-level deep**

// describe() are:
// - commonly known as test suites, which contains test cases
// - merely groups, and you can have groups within groups
describe('galaxy', function(){
  describe('earth', function(){
    describe('singapre', function(){
      it('birds should fly', function(){ /** ... */ })
    })
  })
})


// **2 test cases in 1 test suite**

// A common scenario.
describe('singapre', function(){
  it('birds should fly', function(){ /** ... */ })
  it('horse should gallop', function(){ /** ... */ })
})


// **Run once before the first test case**
describe('singapre', function(){
  before(function(){
    console.log('see.. this function is run ONCE only')
  })
  it('birds should fly', function(){ /** ... */ })
  it('horse should gallop', function(){ /** ... */ })
})


// **Run once before each test case**
describe('singapre', function(){
  beforeEach(function(){
    console.log('see.. this function is run EACH time')
  })
  it('birds should fly', function(){ /** ... */ })
  it('horse should gallop', function(){ /** ... */ })
})

// **2 test suites in a big test suite**

// A common scenario.
describe('earth', function(){
  describe('singapre', function(){
    it('birds should fly', function(){ /** ... */ })
  })
  describe('malaysia', function(){
    it('birds should soar', function(){ /** ... */ })
  })
})


// **before() can be applied to describe() too**
describe('earth', function(){
  before(function(){
    console.log('see.. this function is run ONCE only, before first describe()')
  })
  describe('singapre', function(){
    it('birds should fly', function(){ /** ... */ })
  })
  describe('malaysia', function(){
    it('birds should soar', function(){ /** ... */ })
  })
})


// **beforeEach() can be applied to describe() too**
describe('earth', function(){
  beforeEach(function(){
    console.log('see.. this function is run EACH time, before each describe()')
  })
  describe('singapre', function(){
    it('birds should fly', function(){ /** ... */ })
  })
  describe('malaysia', function(){
    it('birds should soar', function(){ /** ... */ })
  })
})
```
