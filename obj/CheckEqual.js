
const equalFun = (obj1, obj2) => {
  let key1 = Object.keys(obj1)
  let key2 = new Set(Object.keys(obj2))

  if (key1.length !== key2.size) return false
  for (let key of key1) {
    if(!key2.has(key)) return false 

    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object'  
      && obj1[key] !== null && obj2[key] !== null) {  //type of null of object

      if(!equalFun( obj1[key], obj2[key])) return false

    }else{
      if(obj1[key] !== obj2[key]) return false
    }
  }

  return true
}

const obj1 = { a: 1, b: { c: 2 }, d: null };
const obj2 = { a: 1, b: { c: 2 }, d: null };

const isTrue = equalFun(obj1, obj2);
console.log(isTrue ? "Two objects are equal" : "Objects are Not equal");
