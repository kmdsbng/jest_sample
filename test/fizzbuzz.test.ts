import {fizzBuzz} from "../src/fizzbuzz";
test("FizzBuzz test", () =>{
  expect(fizzBuzz(2)).toBe("1 2 ");
  expect(fizzBuzz(3)).toBe("1 2 Fizz ");
});

