// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: AB Check (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=AB%20Check
//Returns true if string received contains 'a' and 'b' separated by exactly 3 places.
function ABCheck(str) { 
  //Using regex - 1 liner
  // return str.match(/a.{3}b/g)!==null;
  
  //Manual solve
  var abs = [];
  var pos = [];
  for (var i=0;i<str.length;i++) {
    if (str[i] == 'a' || str[i] == 'b') {
      abs[abs.length] = str[i];
      pos[pos.length] = i;
    }
  }
  
  for (var j=0;j<abs.length-1;j++) {
    if (abs[j]!== abs[j+1]) {
      if ((pos[j+1]-pos[j]) === 4) { return true; }
    }
  }
  return false;


         
}
//Calls function, read line is input in text box on coderbyte
ABCheck(readline());              
        
     
