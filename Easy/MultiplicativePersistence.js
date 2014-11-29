// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//http://www.coderbyte.com/CodingArea/information.php?ct=Multiplicative%20Persistence
//Counts how many times we can multiply the digits in a number until single digit is reached
//e.g. 2712 --> 2*7*1*2 = 28 --> 2*8 = 16 --> 1*6 = 6 Therefore returns 3 (we did three multiplications to get to a single digit
var count = 0;
function MultiplicativePersistence(num) { 
    if (String(num).length == 1) return count;
    count++;
    return MultiplicativePersistence(eval(String(num).split("").join("*")));
}
//Calls function, read line is input in text box on coderbyte
MultiplicativePersistence(readline());     