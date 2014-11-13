// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Alphabet Soup (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Alphabet%20Soup
//Takes a string and outputs the string in alphabetical order
function AlphabetSoup(str) { 
	return str.split('').sort().join('');          
}
//Calls function, read line is input in text box on coderbyte
AlphabetSoup(readline());           
        
     
