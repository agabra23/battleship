import { experiments } from "webpack";
import Ship from "../Ship.js";

// Get Length
test("getLength", () => {
  const ship1 = new Ship([4, 4], [1, 4]);
  expect(ship1.getLength()).toBe(3);
});

// isSunk False
test("isSunk False", () => {
  const ship1 = new Ship([4, 4], [1, 4]);
  expect(ship1.isSunk()).toBe(false);
});

// isSunk True
test("isSunk True", () => {
  const ship1 = new Ship([4, 4], [1, 4]);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.isSunk()).toBe(true);
});

test("Hit Count 0", () => {
  const ship1 = new Ship([4, 4], [1, 4]);
  expect(ship1.getHits()).toEqual(0);
});

test("Hit Count 2", () => {
  const ship1 = new Ship([4, 4], [1, 4]);
  ship1.hit();
  ship1.hit();
  expect(ship1.getHits()).toEqual(2);
});
