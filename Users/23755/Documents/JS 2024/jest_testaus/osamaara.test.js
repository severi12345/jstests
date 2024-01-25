const osamaara = require('./sum');

test('jakaa numeron 10 numerolla 2 tulokseksi 5', () => {
    expect(osamaara(10, 2)).toBe(5);
});