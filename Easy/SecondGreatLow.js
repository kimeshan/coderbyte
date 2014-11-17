// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: SecondGreatLow (Easy)
//http://coderbyte.com/CodingArea/information.php?ct=Second%20GreatLow
//Returns the second lowest and second higest number in an array
function SecondGreatLow(arr) {
  //Sort lowest to highest        
  var noDuplicates = arr.sort(function (a,b) {return a-b});
  //Remove duplicates       
  for (var i = 0;i<arr.length;i++) {     
    for (var j=0;j<arr.length;j++) {       
      if (arr[i] === arr[j] && !(i===j)) noDuplicates.splice(j,1);
    }
}  
  if (noDuplicates.length>1) return noDuplicates[1]+" "+noDuplicates[sorted.length-2] ; 
  else return sorted[0] + " " + sorted[0];
}           
//Calls function, read line is input in text box on coderbyte
SecondGreatLow(readline());          
        
     


