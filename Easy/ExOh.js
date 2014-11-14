// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Ex Oh (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Ex%20Oh
//Takes a string that contains x's and o's. Output true if equal amount of x's and o's.
function ExOh(str) { 
  var numx= str.match(/x/gi);
  var numy=str.match(/o/gi);
  if (numx!==null && numy!==null) return numx.length == numy.length;
  else return false;          
}
//Calls function, read line is input in text box on coderbyte
ExOh(readline());           
        
     


