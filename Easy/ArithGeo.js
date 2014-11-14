// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Palindrome (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Arith%20Geo
//Takes an array of numbers, returns if the numbers form an arithmetic or geometric sequence (-1 if neither)
function ArithGeo(arr) { 
  //check if arithmetic
  if (arr.length > 1) {
    var arithmetic = true;
    var geometric = true;
    var diff = arr[1] - arr[0];
    var ratio = arr[1]/arr[0];
    var diff_2, ratio_2;
    for (var i =1;i<arr.length-1;i++){
      	diff_2 = arr[i+1]-arr[i];
      	ratio_2 = arr[i+1]/arr[i];
      	if (diff_2 !== diff) { arithmetic = false; }
      	if (ratio_2 !== ratio) {geometric = false;}       
    }
   }
  else return -1;
  
  if (arithmetic) return "Arithmetic";
  else if (geometric) return "Geometric";
  else return -1;
}
//Calls function, read line is input in text box on coderbyte
ArithGeo(readline());           
        
     


