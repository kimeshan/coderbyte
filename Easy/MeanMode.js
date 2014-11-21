// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: MeanMode  (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Mean%20Mode
//Takes a number array, calcs mean and mode - checks if they are equal. Returns 1 if true, 0 if false;

function MeanMode(arr) { 
  var sum = 0;
  var modes = [];
  for (var i = 0; i<arr.length; i++) {
    sum += arr[i];
    var modeCount = 0;
    for (var j = 0; j<arr.length;j++) {
      if (arr[j] === arr[i]) {
        modeCount++;
      }
    }
    modes.push(modeCount);
  }
   mean = sum/arr.length;
  var modePos = 0;
  for (var i = 1; i <modes.length;i++) {
    if (modes[i]>modes[modePos]) {
      modePos = i;
    }
  }
  var mode = arr[modePos];
  if (mode === mean) {
    return 1; }
  else return 0;
}

//Calls function, read line is input in text box on coderbyte
MeanMode(readline());  