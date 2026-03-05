// fast dublicate number
const s = "success"

const findDub = () => {
    let fre = {}

    for(let ch of s){
        if(fre[ch]) return ch
        else{
            fre[ch]=1
        }
    }
    return null
}

console.log(findDub(s))