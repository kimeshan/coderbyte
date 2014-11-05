// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Letter Capitalize(Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Letter%20Capitalize
//Capitalizes first letter of each word in a string
function LetterCapitalize(str) { 
  var words = str.split(" ");
  var newstr = "";
  for (var i=0;i<words.length;i++) {
    for (var j = 0; j<words[i].length;j++) {
      if (j === 0) newstr += words[i][j].toUpperCase();
      else newstr += words[i][j];      
    }
    newstr += " ";
  }
return newstr;
}
//Calls function, read line is input in text box on coderbyte
LetterCapitalize(readline());     