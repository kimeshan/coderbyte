// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Palindrome (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Palindrome
//Takes a string (with spaces) and returns true if it's a palindrome (ignore spaces)
function Palindrome(str) {
  return str.split(' ').join('') === str.split('').reverse().join('').replace(/ /g,'');         
}
//Calls function, read line is input in text box on coderbyte
Palindrome(readline());           
        
     


