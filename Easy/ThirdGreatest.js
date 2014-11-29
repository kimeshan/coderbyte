// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Third Greatest  (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Third%20Greatest
//Finds third largest string in an array
function ThirdGreatest(strArr) { 
   return strArr.sort(function (a,b) {return b.length-a.length;})[2];
}
//Calls function, read line is input in text box on coderbyte
ThirdGreatest(readline());           
