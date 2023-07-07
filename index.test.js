const getRandomNumber = require("./index");

test("getRandomNumber returns a number", () => {
  const randomNumber = getRandomNumber();
  expect(typeof randomNumber).toBe("number");
  expect(randomNumber).toBeGreaterThanOrEqual(0);
  expect(randomNumber).toBeLessThanOrEqual(100);
});
