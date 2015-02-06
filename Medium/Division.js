// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Division(Medium)
//http://coderbyte.com/CodingArea/information.php?ct=Division
//Takes two numbers and returns greatest common factor
function Division(num1,num2) { 
  var smallest = num2;
  if (num1 < num2) smallest = num1;  
  for (var i=smallest;i>0;i--) if (num1%i===0 && num2%i===0) return i;
}
//Calls function, read line is input in text box on coderbyte
Division(readline());           
