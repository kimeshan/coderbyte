// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: RunLength(Medium)
//http://www.coderbyte.com/CodingArea/information.php?ct=Run%20Length
//This algorithm works by taking the occurrence of each repeating character and outputting
//that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p
function RunLength(str) { 
    var currentLetter = str[0], count = 1, compact = "";
    for (var i=1;i<str.length;i++) {
        if (str[i] == currentLetter) count++;
        else {
            compact += count + currentLetter;
            currentLetter = str[i];
            count = 1;
        }
    }        
    compact += count+ str[i-1];
    return compact;
}
//Calls function, read line is input in text box on coderbyte
RunLength(readline());           
