
const equalFun = (obj1, obj2) => {
  // if both are strictly equal , both object same, like we pass obj1 , obj1
  if (obj1 === obj2) return true;

  // if either is null or not an object
  if (typeof obj1 !== "object" || obj1 === null ||
      typeof obj2 !== "object" || obj2 === null) {
    return obj1 === obj2;
  }
 
  // get keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // length check
  if (keys1.length !== keys2.length) return false;

  // check values
  for (let key of keys1) {
    if(!keys2.includes(key)) return false // if keys are different

    if (!equalFun(obj1[key], obj2[key])) { 
      return false;
    }
  }
  return true;
};

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

const isTrue = equalFun(obj1, obj2);
console.log(isTrue ? "two objects are equal" : "two objects are not equal");
