/**
    obj2arr.test.js

    @author:
      - Derek Johnston

    @desc:
      - Provide some unit tests for the obj2arr helper function
*/
import obj2arr from "../obj2arr";

test("Should convert an object into an array", () => {
  const testObject = {
    key0: "Key 0",
    key1: "Key 1",
    key2: "Key 2"
  };

  const expectedArray = ["Key 0", "Key 1", "Key 2"];
  const testArray = obj2arr(testObject);

  expect(testArray).toEqual(expectedArray);
});

test("Should throw an error if no parameter is provided.", () => {
  try {
    const testArray = obj2arr();
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error if an invalid parameter is provided.", () => {
  try {
    const testArray = obj2arr("{testKey: true}");
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});
