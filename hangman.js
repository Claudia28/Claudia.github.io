//create an arrary of 90's cartoons//
const word = ["rugrats","hey arnold","catdog","salior moon",];
const keyWord = [];

//chose word randomly 
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightWord =[];
let wrongWord =[];
let underScore = [];
console.log (choosenWord);

//create underscores based on names of words
let genertateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push ('_');
 }
    
    return underScore;

var scores = "<p>" + underScore + "</p>";

document.querySelector('.underscore').innerHTML = scores;

}

console.log(genertateUnderscore());

//get users guess
document.addEventListener('keypress', (event) => {
    let keycode = event.key;
console.log(keycode);
    
});

//check if guess is right 
if(choosenWord.indexOf(keyWord) > -1) {
    rightWord.push(keyWord);
    console.log(rightWord);

    wrongWord.push(keyWord);
    console.log(wrongWord);
   
}

//if right push to right array

//if wrong push to wrong array 



