// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Simple Adding(Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Simple%20Adding

//Finds the sum of all numbers from 1 to num
function SimpleAdding(num) { 
  //Alternate one-line solution: return num*(num+1)/2     
  var sum = 0;
  for (var i=1;i<=num;i++)
  {
    sum += i;
  }
  return sum; 
    
}
//Calls function, read line is input in text box on coderbyte
SimpleAdding(readline());           
