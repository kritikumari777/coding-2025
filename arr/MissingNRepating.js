// find repating and replace with missing
const a = [4, 3, 6, 2, 1, 1];
const arr = a.sort((a, b) => a - b);

let repeating, missing;

// Single loop
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) repeating = arr[i];      // repeating found
  if (arr[i + 1] - arr[i] > 1) missing = arr[i]+1;  // gap → missing
  // if(i+1 !== arr[i]) missing = i+1
}

// Replace repeating with missing
// const fixedArr = arr.map((num, i)=> (i+1 === repeating ? missing : num));
arr[repeating] = arr[missing]
console.log("Repeating:", repeating);
console.log("Missing:", missing);
console.log("Fixed Array:", arr);
