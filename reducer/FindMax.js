const arr = [1, 5, 3, 5, 6, 8, 3]

const res = arr.reduce((acc, cv)=>{
  if(acc < cv){
    acc = cv
  }
  return acc
}, 0)

console.log(res)

const ans = arr.reduce((a,b) => Math.max(a,b))
console.log(ans)