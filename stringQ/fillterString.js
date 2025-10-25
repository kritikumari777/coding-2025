// He!!o W@rld### => HeoWrld

let s = "He!! W@rld###"

console.log(s.replace(/[^a-zA-Z]+/g, ""))

// or

let res = s.match(/[a-z, A-Z]+/g, " ").join("")
let ans = ""
for(let i of res){
    if(i=== " "){
        continue
    }else{
        ans+=i
    }
}

console.log(ans);

