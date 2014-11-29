// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//http://www.coderbyte.com/CodingArea/information.php?ct=Off%20Line%20Minimum
//Take an array of integers and 'E', when it find 'E' it pulls out the smallest integer in the array up to that point. 
// Does this until the end of the array and returns the subset found of all those smallest intefers.
//e.g. [1,17,-2,'E',3,5,100,8,'E',87,57,5,'E'] will pull out -2, then 1, then 3 so returns -2,1,3
function OffLineMinimum(strArr) { 
  var subset = [], min = 0;
  function findMin (arr) { return arr.sort(function (a,b) {return Number(a)-Number(b);})[0]; }
  for (var i=0;i<strArr.length;i++) {
    console.log(strArr[i]);
    if (strArr[i] == "E") { 
      min = findMin(strArr.slice(0,i));
      minIndex = strArr.slice(0,i).indexOf(min)
      subset.push(Number(min));
      strArr = strArr.slice(0,minIndex).concat(strArr.slice(minIndex+1,i)).concat(strArr.slice(i+1));
      i-=2;
    }
  }
  return subset.join(",");         
}
//Calls function, read line is input in text box on coderbyte
OffLineMinimum(readline());       