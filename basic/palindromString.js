// Time Complicity : o(n)
const palindromFun = (s) =>{  

    let rev = s.split("").reverse().join("")
    return s === rev

}

let str = "MOM"
console.log(palindromFun(str))

// Time Complicity : o(n)
const palindrom = (s) => {
    let rev = ""
    for(let i=s.length -1; i>=0; i--){
        rev +=s[i]
    }
    return rev
}
let str1 = "MOM"
console.log(palindrom(str1))

// Time Complicity : o(1)

const palindromBest = (s) => {
    let Left = 0
    let Right = s.length-1

    while(Left<Right){
        if(s[Left] !== s[Right]) return false
        Left++
        Right--
    }

    return true
}
let str2 = "MOM"
console.log(palindromBest(str2))