const testExemp = require('./data');

test('if first day of month > (is true), if not > (is false', () => {
    expect(testExemp.isBeginOfMonth()).toBe(false) //перевірка на коректність виконання тесту
    expect(testExemp.isBeginOfMonth()).toBe(true) //перевірка умови задачі
});