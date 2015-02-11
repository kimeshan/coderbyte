// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Binary Converter
//http://coderbyte.com/CodingArea/information.php?ct=Binary%20Converter
//Takes a binary (base 2) string and outputs it's decimal value (base 10)
function BinaryConverter(str) { 
  var decimal = 0;
  for (var i=str.length-1;i>=0;i--) if (Number(str[i])) decimal+=Math.pow(2,str.length-1-i);  
  return decimal+"";          
}    
//Calls function, read line is input in text box on coderbyte
BinaryConverter(readline());           
