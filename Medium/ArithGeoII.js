// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Arith Geo II(Medium)
//http://coderbyte.com/CodingArea/information.php?ct=Arith%20Geo%20II
//Determine if numbers in an array follow an arithmetic or geometric sequence
function ArithGeoII(arr) { 
  if (arr.length<2) return -1;
  var i=1, j=1;
  var diff = arr[1]-arr[0];
  var ratio = arr[1]/arr[0];
  while (i<arr.length-1 && arr[i+1]-arr[i] == diff) {
    if (i==arr.length-2) return "Arithmetic";
    i++;
  }
    
  while (j<arr.length-1 && arr[j+1]/arr[j] == ratio) {
    if (j==arr.length-2) return "Geometric";
    j++;
  }
  return -1;
         
}
//Calls function, read line is input in text box on coderbyte
ArithGeoII(readline());           
