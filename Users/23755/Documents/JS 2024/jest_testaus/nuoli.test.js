describe.skip('sum-testit', () => {

const sum = require ('./nuoli');
test('syötteet numeromaisia merkkijonoja', () => {
    expect(sum("1", "2")).toBe(3);
  });

})