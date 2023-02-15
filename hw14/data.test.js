const testExemp = require('./data');

test('if first day of month > (is true), if not > (is false', () => {
    expect(testExemp.isBeginOfMonth(new Date(2022, 1, 24, 4, 30))).toBe(false) //перевірка на коректність виконання тесту
});
test('if first day of month > (is true), if not > (is false', () => {
    expect(testExemp.isBeginOfMonth(new Date(2022, 1, 1))).toBe(true)  //перевірка умови задачі
});
test('return the last day of the month', () => {
    expect(testExemp.lastDayOfMonth(new Date(2022, 1, 24))).toBe(28)
})