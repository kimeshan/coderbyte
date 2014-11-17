// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Array Addition I (Easy)
//http://coderbyte.com/CodingArea/information.php?ct=Array%20Addition%20I
//Takes an array of numbers, returns true if any combination of numbers can add up to the largest.
function ArrayAdditionI(arr) { 
    var arrSorted = arr.sort(function (a,b) { return a-b; });
    var largest = arrSorted.pop(); 
    function findTarget (target,array) {
        if (array.length === 0) return target === 0;
        var n = array[0];
        array = array.slice(1);
        //Recursively checks if target can be reached by including or exluding each element
        return findTarget(target,array) || findTarget(target-n,array);
    }
    return findTarget (largest,arrSorted);    
}
           
//Calls function, read line is input in text box on coderbyte
ArrayAdditionI(readline());          
        
     


