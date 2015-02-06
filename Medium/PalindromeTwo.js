// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: PalindromeTwo(Medium)
//http://coderbyte.com/CodingArea/information.php?ct=Palindrome%20Two
//Takes in a string and return true if it's a palindrome or false if not. Ignores punctuation or symbols!
function PalindromeTwo(str) { 
  var arr = str.toLowerCase().match(/[a-z,0-9]/gi);
  return arr.join("") === arr.reverse().join(""); }
//Calls function, read line is input in text box on coderbyte
PalindromeTwo(readline());           
