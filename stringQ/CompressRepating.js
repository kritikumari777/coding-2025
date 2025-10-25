//Compress a String
//"aaabbccccd" → "a3b2c4d1"

const s = "aaabbccccd"
let comp = ""
let count = 1
for(let i=0 ; i< s.length; i++){
    if(s[i] === s[i+1]){
        count+=1
    }else{
        comp+= s[i] + String(count)
        count = 1
    }
}

 console.log(comp)