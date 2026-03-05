//Check if Strings Are Rotations of Each Other
// s1 = "abcd", s2 = "cdab" // after two rotation its qeual

let s1 = "abcd"
let s2 = "cdab"

const findRotation = (s1, s2, l) => {
    if (s1.length !== s2.length) return false
    if (s1 === s2) return true
    if (l > 0) {
        let ans = ""
        ans += s2.slice(s2.length - 1, s2.length) + s2.slice(0, s2.length - 1)
        console.log(s1, ans)
        return findRotation(s1, ans, l - 1)
    } else {
        return false
    }
}

console.log(findRotation(s1, s2, s2.length))

const isEqualRotation = (s1, s2, l) => {
    if (s1.length !== s2.length) return false
    if (s1 === s2) return true
    if (l > 0) {
        let arr = s2.split("")
        arr.unshift(s2[s2.length - 1])
        arr.pop(s2[s2.length - 1])
        return isEqualRotation(s1, arr.join(""), l-1)
    }
}

console.log(isEqualRotation(s1, s2, s2.length))

/// or time complicity : 0(n)

console.log((s1+s1).includes(s2))