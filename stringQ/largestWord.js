// Find the Longest Word in a Sentence
var word = "I can do it kriti, keep patient and grow up"
var lw = ""

for(let w of word.split(" ")){
    if(w.length > lw.length ){
        lw = w
    }
}

console.log(lw)