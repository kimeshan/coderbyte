// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Longest Word(Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Longest%20Word

//This function simply receives a sentence and returns its longest word.

function LongestWord(sen) { 

  var words = sen.split(" ");
  var longestLen = words[0].length;
  var longestWord = 0;
  for (i=1; i<words.length;i++) {
    if (words[i].length>longestLen) {
      longestLen = words[i].length;
      longestWord = i;
    }
  }
  return words[longestWord]; 
         
}
//Calls function, read line is input in text box on coderbyte
LongestWord(readline());           
