const sum = require('./sum');

test('ES6 test sum function 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});
