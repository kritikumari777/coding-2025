const palindromFun = (s) =>{

    let rev = s.split("").reverse().join("")
    return s === rev

}

let str = "MOM"
console.log(palindromFun(str))

