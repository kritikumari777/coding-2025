// Time complicity o(n2)
//Space Complicity - o(n)

let arr = [2, 3, 3, 4, 2, 5, 4, 7]
const newArr = arr.filter((v, i) =>  i === arr.indexOf(v))
console.log(newArr)

// best approch Set() 
// Time complicity - o(n) , 
// Space Complicity - o(1)

let ar = [2, 3, 3, 4, 2, 5, 4, 7]
let filterArr = [... new Set(ar)]
console.log(filterArr)


