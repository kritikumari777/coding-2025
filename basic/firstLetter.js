// fast dublicate number
const s = "success"

for(let i=1; i<s.length ; i++){
    if(s[i-1] == s[i]){
        console.log(s[i])
        break
    }
}