// s1 = "aab", s2 = "xxy"

// a -> 98 +23 = 120 -> z

let s1 = "aab"
let s2 = "xxy"

const checkFun = (s1, s2) => {

 if(s1.length !== s2.length) return  false

  for(let i=0; i< s1.length; i++){
    let v1 = s1[i].charCodeAt() + 23
    let v2 = s2[i].charCodeAt()
    if(v1 !== v2){
        return false
    }
  }
  return true
}

console.log(checkFun(s1.toLocaleLowerCase(), s2.toLocaleLowerCase()))


