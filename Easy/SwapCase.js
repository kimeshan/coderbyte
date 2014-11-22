// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Swap Case  (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Swap%20Case
//Swaps the case of letters in a string i.e. low to upper and then upper to lower
function SwapCase(str) {  
      return str.replace(/[a-z]/gi, function (a) {return a.toUpperCase()==a?a.toLowerCase():a.toUpperCase();}); 
}
//Calls function, read line is input in text box on coderbyte
SwapCase(readline());           
