const s = "123kritikumari@gmail.com"
var count = 0
for(let i of s){
    if(i==="i"){
        count++
    }
}
console.log(count)

const res = s.match(/i/g || []).length
console.log(res)

const re = s.split("i")
console.log(re.length -1)