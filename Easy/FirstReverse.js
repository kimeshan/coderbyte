// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: FirstReverse(Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=First%20Reverse

//This function simply receives a string and returns it reversed.
function FirstReverse(str) { 
  return str.split("").reverse().join(""); 
         
}
   
//Calls function, read line is input in text box on coderbyte
FirstReverse(readline());           
