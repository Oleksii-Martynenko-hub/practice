import * as romanNumDecoder from "./codewars/roman-numerals-decoder";
import { test } from "./test";

test({
  input: "XXIV",
  output: romanNumDecoder.mySolution("XXIV"),
  expected: 24,
});
test({
  input: "XVIII",
  output: romanNumDecoder.mySolution("XVIII"),
  expected: 19,
});
