// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: FirstFactorial(Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=First%20Factorial

//Calculates and returns factorial of a number
function FirstFactorial(num) { 
  var prod = 1;
  for (i=2;i<=num;i++) {
    prod = prod * i;
  }
  return prod; 
         
};
   
//Calls function, readline() reads in input from text box on coderbyte sandbox
FirstFactorial(readline());           
