var s = '28d456gfetc345'
// filter number
console.log(parseInt(s)) // first number

const fundSun = (s) => {
    var st = s.match(/[0-9]/g) 
    return st.join("")
}

console.log(fundSun(s))

// const findNum = (s) => {
//     let str = s.split("")
//     const st = str.filter((a, i) => {
//        if(!isNaN(a)){
//         return a
//        }
//     })
    
//     const sum = st.reduce((ac, cv) => {
//        return ac + parseInt(cv)
//     } , 0)
  
//     return sum
// }
// console.log(findNum(s))
