// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: PrimeTime(Medium)
//http://www.coderbyte.com/CodingArea/information.php?ct=Prime%20Time
//Determines if a number is a prime number or not
function PrimeTime(num) { 
  for (var i=2;i<=Math.floor(num/2);i++) if (num%i===0) return "false";
  return "true";         
}    
//Calls function, read line is input in text box on coderbyte
PrimeTime(readline());           
