// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Array Addition(Medium)
//http://coderbyte.com/CodingArea/information.php?ct=Array%20Addition
//Determine if numbers in an array will add up to the largest number in it
function ArrayAddition(arr) { 
  var sorted = arr.sort(function (a,b) { return a-b; });
  var largest = sorted.pop();  
  function findTarget (target,arr) {
    if (arr.length === 0 ) return target === 0;
    var n = arr[0];
    arr = arr.slice(1);
    return findTarget(target,arr) || findTarget(target-n,arr);
  }
  return findTarget(largest,sorted);        
}  
//Calls function, read line is input in text box on coderbyte
ArrayAddition(readline());           
