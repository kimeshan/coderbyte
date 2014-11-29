// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Powers of Two  (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Powers%20of%20Two
//Returns if a number is a power of two or not e.g. 2^3 = 8 so will return true for 8.
function PowersofTwo(num) {
    if (num == 0) return false;
    else if (num == 1) return true;
    while (num>1) {
        if (num%2 !== 0) return "false";
        num /= 2;
    }
    return 'true';
}
//Calls function, read line is input in text box on coderbyte
PowersofTwo(readline());           
