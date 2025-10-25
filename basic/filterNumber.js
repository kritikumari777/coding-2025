var s = '28d456gfetc345'

console.log(parseInt(s))

const fundSun = (s) => {
    var st = s.match(/d+/g)
    console.log(st)
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
