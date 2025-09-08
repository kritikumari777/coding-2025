// silent - listen time complicity - o(n log n)

const findAnagram = (st1, st2) => {
if(st1.length !== st2.length) return false
 let s1 = st1.split("").sort().join()
 let s2 = st2.split("").sort().join()

 return s1===s2

}

let st = "silent"
let st2 = "listen"
console.log(findAnagram(st, st2))