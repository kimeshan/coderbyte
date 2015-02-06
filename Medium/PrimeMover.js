// Kimeshan Naidoo, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: PrimeMover(Medium)
//http://coderbyte.com/CodingArea/information.php?ct=Prime%20Mover
//Takes in parameter num (e.g. 5), and returns the num'th (e.g. 5th) prime number 
function PrimeMover(num) { 
  //check if prime number
  var prime = true;
  var primes = [2];
  for (var j=3;primes.length<num;j++) {
    for (var i=2;i<=Math.ceil(j/2);i++) {
      if (j%i==0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primes[primes.length] = j;
    }
    prime = true;
  }        
  return primes[num-1]; 
}
//Calls function, read line is input in text box on coderbyte
PrimeMover(readline());           
