const fruits = [
  'apple',
  'banana',
  'grapes',
  'kiwi',
  'watermelon'
];

test('fruit array/list has kiwi', () => {
  expect(fruits).toContain('kiwi')
});

test('get a Uppercase list of the first letter of fruit list', () => {
  expect(fruits.map(function(item) {
    return item[0].toUpperCase();
  }))
  .toEqual(['A', 'B', 'G', 'K', 'W']);
});

test('Fruit list uppercase first letter', () => {
  expect(fruits.map(function(string) {
    return string[0].toUpperCase() + string.slice(1);
  }))
  .toEqual(['Apple', 'Banana', 'Grapes', 'Kiwi', 'Watermelon']);
});
