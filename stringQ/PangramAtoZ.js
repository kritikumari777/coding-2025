const st = "The quick brown fox jumps over the lazy dog"

const checkFun = (s) => {
    let temp = ""

    for (let i of s.toLowerCase()) {
        if (!temp.includes(i) && i !== " ") {
            temp += i
        }
    }
    return temp.trim().length === 26
}

console.log(checkFun(st))

// OR

const checkAZChar = (s) => {

    const set = new Set()

    for(let i of s.toLowerCase()){
        if(i >= "a" && i <= "z"){
            set.add(i)
        }
    }

    return set.size === 26
}

console.log(checkAZChar(st))