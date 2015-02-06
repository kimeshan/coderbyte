// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: StringScramble(Medium)
//http://coderbyte.com/CodingArea/information.php?ct=String%20Scramble
//Takes two strings,returns true if portion of str1 can be rearranged to match str2.
function StringScramble(str1,str2) { 
    for (var i=0;i<str2.length;i++) if(str1.indexOf(str2[i])<0) return false; 
    return true;
}
//Calls function, read line is input in text box on coderbyte
StringScramble(readline());           
