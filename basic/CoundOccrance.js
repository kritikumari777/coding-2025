const arr = [2, 4, 6, 5, 6, 7, 5, 2, 4, 5, 2]

const findOcc = arr.reduce((ac, cv) =>{
     ac[cv] = (ac[cv] || 0)  + 1
   return ac
}, {})

console.log(findOcc)

// or 
const countOcc = arr.reduce((acc, cv) =>{
    if(!acc[cv]){
        acc[cv] = 1
    }else{
       acc[cv] = acc[cv] + 1
    }
    return acc
}, {})

console.log(countOcc)

// or 

const countFun = (arr) => {
    let res = {}
    for(let i of arr){
        if(!res[i]){
            res[i] = 1
        }else{
            res[i] = res[i] +1
        }
    }
    return res
}

console.log(countFun(arr))