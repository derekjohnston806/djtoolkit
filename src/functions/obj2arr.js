/**
    obj2arr.js

    @author:
      - Derek Johnston

    @desc:
      - Converts an object to an array.
*/
function obj2arr(obj) {
  let arr = [];

  for (const key in obj) {
    arr.push(obj[key]);
  }

  return arr;
};

export default obj2arr;
