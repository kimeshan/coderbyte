// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Check Nums (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Check%20Nums
//Compares 2 numbers, returns the larger one or "-1" if both are equal.
function CheckNums(num1,num2) { 
    return num1>num2?num1:num2>num1?num2:"-1";
}
   
//Calls function, read line is input in text box on coderbyte
CheckNums(readline());           
