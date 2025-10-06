const arr = [[1,4], [2, 4, 5], [9,6], [8]]

const res = arr.reduce((acc, cv)=>{
    //acc.push(...cv) // i cant assign it to other veriable it will give error
   //    return acc

   // or concate
    return acc.concat(cv)

}, [])

console.log(res)

const ans = arr.flat()
console.log(ans)