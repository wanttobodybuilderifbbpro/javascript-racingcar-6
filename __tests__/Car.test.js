/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
const Car = require("../src/Car");

describe("Car Test", () => {
  test.each([
    ["yun", 12, 12, true],
    ["ga", 10, 11, false],
  ])("자동차 전진 검사", (name, go, position, expected) => {
    const car = new Car(name);
    for (let i = 0; i < go; i++) {
      car.move(true);
    }
    expect(car.getPosition() === position).toBe(expected);
  });
});
