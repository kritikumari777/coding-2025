// Find the Longest Palindromic Substring
//babad

const s = "babad"
let longest = ""
for(let i=0; i<s.length; i++){
    for(let j=i+1;  j < s.length; j++){
        let sub = s.slice(i,j)
        if(sub === sub.split("").reverse().join("") && sub.length > longest.length){
            longest = sub
        }
    }
}

console.log(longest)