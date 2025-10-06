const arr = [2, 4, 5, 8, 5, 3, 2, 7, 2, 4]

const ans = arr.reduce((acc, cv) => {
   if(acc[cv]){
    acc[cv]+=1
   }else{
    acc[cv] = 1
   }
   return acc
},{})

console.log(ans)


const res = arr.reduce((acc, cv) => {
    acc[cv] = (acc[cv] || 0) + 1 
    return acc
},{})

console.log(res)