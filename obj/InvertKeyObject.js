const obj = { a: 1, b: 2, c: 3 };

const invertKeyObj = (obj1) => {
    let res = {}
    for(let key in obj1){
       res[obj1[key]] = key
    }
    return res
}
console.log(invertKeyObj(obj))
