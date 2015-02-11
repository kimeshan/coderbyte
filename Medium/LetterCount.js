// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Letter Count(Medium)
//http://coderbyte.com/CodingArea/information.php?ct=Letter%20Count
//Takes a string (sentence) and find the word that contains highest repeating letter (in that word).
function LetterCount(str) { 
    var words = str.split(" ");
    var letters,letter_counts,regExp;
    var maxLetterCount=0, currentMaxLetterCount=0;
    //Loop through words
    for (var wordIndex=0;wordIndex<words.length;wordIndex++) {
        //Loop through each letter in the word
        letters = words[wordIndex].split("");
        letter_counts = letters.map(function (a) {
            if (a.match(/\w/i)!==null) {
                regExp = new RegExp(a,"gi");
                return letters.join("").match(regExp).length;
            }
            else return 0;
        });
        currentMaxLetterCount = letter_counts.sort(function (a,b) {return a-b;}).pop();
        if (currentMaxLetterCount>maxLetterCount) {
            maxLetterCount = currentMaxLetterCount;
            maxLetterWord = words[wordIndex];
        }
    }
    return maxLetterCount>1?maxLetterWord:-1;
}         

//Calls function, read line is input in text box on coderbyte
LetterCount(readline());           
