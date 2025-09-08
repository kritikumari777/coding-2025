
const nestedObj = (obj1, isKey, res={}) => {
       for(let key in obj1){
        newKey = isKey ? `${isKey}.${key}` : key

        if(typeof obj1[key] === "object" && obj[key] !== null){
            nestedObj(obj1[key] , newKey, res)
        }else{
            res[newKey] = obj1[key]
        }
       }
       return res
}

const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
console.log(nestedObj(obj))

