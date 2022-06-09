const validator = require('./validator');
let expr = "([{()}])";
const result = validator.check(expr);

test('Check if the brackets are balanced', () => {
  expect(result).toBe(true);
}, 30000);