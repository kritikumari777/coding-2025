// silent - listen time complicity - o(n log n)

const findAnagram = (st1, st2) => {
if(st1.length !== st2.length) return false
 let s1 = st1.split("").sort().join()
 let s2 = st2.split("").sort().join()

 return s1===s2

}

let st1 = "silent"
let st2 = "listen"
console.log(findAnagram(st1, st2))


// time complicity O(n)  --- best approch

const findAnaFun = (s1, s2) => {
    if(s1.length !== s2.length) return false

    let freq = {}

    for(let ch of s1){
       freq[ch] = (freq[ch] || 0) +1
    }

    console.log(freq)

    for(let ch of s2){
        if(!freq[ch]) return false
        freq[ch] --
        console.log(freq)
    }

    return true
}

let s1 = "silent"
let s2 = "listen"
console.log(findAnaFun(s1, s2))