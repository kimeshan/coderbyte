// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Dash Insert  (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Dash%20Insert
//Takes a string of digits, insert a dash between two odd numbers.
function DashInsert(num) { 
  var numStr = (num+"").split("");
  for (var i=0;i<numStr.length-1;i++) {
    if (numStr[i]%2!==0&&numStr[i+1]%2!==0) {
      numStr.splice(i+1,0,'-');
      i++;
    }
  }  
  return numStr.join("");       
}  
//Calls function, read line is input in text box on coderbyte
DashInsert(readline());           
