var s = "123kritikumari@gmail.com";

//Character at index 5.
console.log(s.charAt(5)) // op - i

// First index of "k".
console.log(s.indexOf("k"))  // op - 3

// First index of "i".
console.log(s.lastIndexOf("i")) // op - 18

// Checks if substring exists.
console.log(s.includes("@"))  // true

// Checks prefix.
console.log(s.startsWith(123))  // true

//Checks suffix.
console.log(s.endsWith("com")) // true

//spilt into array
console.log(s.split("@")) // [ '123kritikumari', 'gmail.com' ]

// split every latter into array
var st = "kriti"
console.log(st.split(""))  // [ 'k', 'r', 'i', 't', 'i' ]

//join array into string
var arr = [ 'k', 'r', 'i', 't', 'i' ]
console.log(arr.join(""))  // kriti

// Replaces first match.
console.log(s.replace("k", "K")) // 123Kritikumari@gmail.com

// Replaces all matches.
 console.log(s.replaceAll('i', "I")) // 123krItIkumarI@gmaIl.com

// trim
var s2 = "   kri  ti   "
console.log(s2.trim()) // kri  ti

// Removes left spaces.
var s3 = "   krit sf    "
console.log(s3.trimStart()) // "krit sf   "

// Removes end spaces.
console.log(s3.trimEnd()) // "   krit sf"

// Returns array of matche
console.log(s.match(/[a-z]+/g)) // [ 'kritikumari', 'gmail', 'com' ]

// Returns position of match
console.log(s.search("gmail")) // 15

//Returns iterator of all matches.
const ar = [... s.matchAll(/\w+/g)]
console.log(ar)

// Checks if regex matches.
console.log(/@/.test(s))

// Convert Between String and Number

//Convert string to number.
const n = Number(s)
console.log(typeof n)

// Convert number to string.
const str2 = String(s)
console.log(typeof str2)

// Extracts integer part.
const n2 = parseInt(s)
console.log(n2)

// Extracts float part.
const str3 = "3.45kkrf"
const fl = parseFloat(str3)
console.log(fl)