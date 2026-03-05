// Find the Longest Palindromic Substring
//babad

const s = "babad"
  
const finLongest = (s) => {
    let lsp = ""
    for(let i=0; i<s.length; i++){
        for(let j=i+1;  j < s.length; j++){
            let temp = s.slice(i,j)
            let rev = temp.split("").reverse().join("")
            if(temp == rev && lsp < temp){
                    lsp=temp
            }
        }
    }
    return lsp
}

console.log(finLongest(s))