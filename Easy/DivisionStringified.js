// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Division Stringified (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Division%20Stringified
//Takes two numbers and returns the quotient in the format x,xxx,xxx (comma separated each group of 3 decimals)
function DivisionStringified(num1,num2) { 
  var quotient = Math.round(num1/num2);
  if (quotient<=1000||quotient=='Infinity') return quotient;
  var count = 0;
  strQA = String(quotient).split("");
  for (var i=strQA.length-1;i>-1;i--) {
      count++;
      if (count%3===0&&i!==0) strQA.splice(i,0,',');
      }
    return strQA.join("");            
}
           
//Calls function, read line is input in text box on coderbyte
DivisionStringified(readline());          
        
     


