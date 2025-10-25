var s = "123kritikumari@gmail.com"

const findType = (s) => {
    // var str = s.split("")
    var st = s.includes("@")
    var res
    if(st){
       res = s.slice(s.indexOf("@") +1, s.length)
       console.log(res)
    }

    return res

}

console.log(findType(s))