// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Letter Count I (Easy)
//http://coderbyte.com/CodingArea/information.php?ct=Letter%20Count%20I
//Takes a string an returns the leftmost (first) word that has any letter repeated the most
function LetterCountI(str) { 
//This function receives a word string, and counts how many times each letter appears, and returns an object in the format of letter: number of times letter appears (key:value)
  function Word(str) {
    for (var i = 0; i<str.length;i++) {
        var char = new RegExp (str[i],"gi")
        this[str[i]] = str.match(char).length;
    } 
}
words = str.split(" ");
wObjs = []; //Array of objects
for (var i =0;i<words.length;i++) {
    wObjs[wObjs.length] = new Word (words[i]);
    console.log(wObjs);
}
var highest = 0;
var highWordPos = 0;
for (var j=0;j<wObjs.length;j++) {
    //Find the most repeated letter in each word object
    for (var letter in wObjs[j]) {
        if (wObjs[j][letter] > highest) {
            highest = wObjs[j][letter];
            highWordPos = j;
        }
        }
    }
  if (highest > 1) return words[highWordPos];
  else return -1;
         
}
             
//Calls function, read line is input in text box on coderbyte
LetterCountI(readline());          
        
     


