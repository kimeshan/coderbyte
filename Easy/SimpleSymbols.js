// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Simple Symbols (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Simple%20Symbols
//Check that each letter (a-z, case insensitive) is surrounded by '+' symbole i.e. +a+12+b+
function SimpleSymbols(str) { 

  var len = str.length;
  if (len>0 && str[0].match(/[a-z]/i) === null && str[len-1].match(/[a-z]/i) === null) {
    for (var i = 1; i<len-1;i++) {
      if (str[i].match(/[a-z]/i)!== null) {
          //It's a letter, check if surrounded by +
        if (str[i-1] === "+" && str[i+1] === "+") continue;
        else return "false";
    	}  
  	}
  	return "true";
	}
  else return "false";
}
//Calls function, read line is input in text box on coderbyte
SimpleSymbols(readline());  