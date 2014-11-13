// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Vowel Count (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Vowel%20Count
//Counts vowels in a string
function VowelCount(str) { 
	//1 line regex solve
	//return str.match(/[aieou]/gi).length; 
	//Manual solve
	var vowels = "aeiouAEIOU";
  	var count = 0;
  	for (var i=0; i<str.length; i++) {
    	if (vowels.indexOf(str[i])>-1) count++; }
  	return count;         
}
//Calls function, read line is input in text box on coderbyte
VowelCount(readline());           
         
        
     
