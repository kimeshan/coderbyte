// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Number Addiction  (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Number%20Addition
//Takes a string, extracts the digits in it and returns the sum of them
function NumberAddition(str) { 
    var numbers = [];
    var currentNumber = "";
    for (var i = 0; i<str.length; i++) {
        currentNumber = "";
        while (str[i]!==" " && !isNaN(Number(str[i]))) {
            currentNumber+=str[i];
            i++;
        }
        if (currentNumber !== "") numbers.push(Number(currentNumber));        
    }
    //Sum all numbers
    var sum = 0;
    for (var j = 0;j<numbers.length;j++) {
        sum += numbers[j];
    }
    return sum;
}
//Calls function, read line is input in text box on coderbyte
NumberAddition(readline());           
