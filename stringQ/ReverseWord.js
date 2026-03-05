let st = "Kriti Kumari"

const reverseLetter =(s) => {
let res = ""
for(let i=s.length-1; i>=0; i--){
    res+=s[i]
}
return res
}

console.log(reverseLetter(st))

const reverseWord = (s) => {
 let res = ""
 let arr = s.split(" ")
 for(let i=arr.length-1; i>=0; i--){
    res+= arr[i] + " "
 }
 return res.trim()
}

console.log(reverseWord(st))

const firstChFun = (s) => {
  
  let res = ""
  let arr = s.split(" ")
  for(let i of arr){
    let v = i.charAt(0)
    res+= v
  }
  return res

}
console.log(firstChFun(st))


