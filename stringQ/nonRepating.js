// Find the First Non-Repeating Character

let s = 'kritikumari@gmail.com'
const ans = findNonRepating = () => {
   for(let i of s){
    let count = s.split(i).length -1
    if(count ===1){
        return i
    }
}
}

console.log(findNonRepating(s))


