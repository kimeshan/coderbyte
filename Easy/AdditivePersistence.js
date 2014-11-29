// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//http://www.coderbyte.com/CodingArea/information.php?ct=Additive%20Persistence
//Counts how many times we can add the digits in a number until single digit is reached
//e.g. 2712 --> 2+7+1+2 = 12 --> 1+2 = 3. Therefore returns 2 (we added digits twice until we reached 3)
var count = 0
function AdditivePersistence(num) { 
    if (String(num).length == 1) return count;
    return AdditivePersistence (eval(String(num).split("").join("+")),count++);
}
//Calls function, read line is input in text box on coderbyte
AdditivePersistence(readline());     