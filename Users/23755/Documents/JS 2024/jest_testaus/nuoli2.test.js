describe.skip('sum-testit', () => {

const sum = require ('./nuoli2');

test('syötteet merkkijonoja, heitetään poikkeus', () => {
    expect(() => {
    sum("jesse", "minna")}).toThrow('ei lukuja');
});

test('annetaan vain yksi parametri, palautetaan luku itse', () => {
    expect(sum(4)).toBe(4);
});
  
test('parametrit puuttuvat, heitetään poikkeus', () => { 
    expect(() => {
    sum()}).toThrow('ei parametreja');
});

})