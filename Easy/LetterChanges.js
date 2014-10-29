// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Letter Changes(Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Letter%20Changes

//This function receives a string and changes each letter to the next letter in the alphabet e.g. a to b
//f to g, z to a. Then it capitalizes all vowels and returns the result.
function LetterChanges(str) { 
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou";
  var str2 = "";
  for (var i = 0;i<str.length;i++) 
  {
    var index = alphabet.indexOf(str[i]);
    if (index>-1&&index<=alphabet.length-2) str2 += alphabet[index+1];
    else if (index === alphabet.length-1) str2 += "a";
    else str2 += str[i];
  }
  str2= str2.replace(/[aeiou]/g, function (x) { return x.toUpperCase();});  
  return str2;         
}
//Calls function, read line is input in text box on coderbyte
LetterChanges(readline());           
