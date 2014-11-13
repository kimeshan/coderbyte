// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Time Convert (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Time%20Convert
//Receivers num (number of minutes), outputs hours:minutes.
function TimeConvert(num) {  
  return Math.floor(num/60)+":"+num%60; 
}
//Calls function, read line is input in text box on coderbyte
TimeConvert(readline());           
     
