// Kimeshan Naidoo 2014, www.kimeshan.com. 
//Coderbyte profile: http://www.coderbyte.com/CodingArea/Profile/?user=kimeshan
//Solution for Coderbyte Challenge: Counting Minutes I  (Easy)
//http://www.coderbyte.com/CodingArea/information.php?ct=Counting%20Minutes%20I
//Takes two times in 12 hour format: 09:00am - 3:46pm and returns number of minutes passed between the two
function CountingMinutesI(str) { 
  var times = str.split('-');
  var startHM = times[0].split(':');
  var endHM = times [1].split(':');
  var startHour = Number(startHM[0]);
  var endHour= Number(endHM[0]);
  var startMin = Number(startHM[1].substring(0,2));
  var endMin = Number(endHM[1].substring(0,2));
  //Convert hours to 24 hour format
  if (startHM[1].indexOf('pm') > -1 && startHM[0].indexOf('12')==-1 || startHM[1].indexOf('am')>-1 && startHM[0].indexOf('12')>-1) {
    startHour += 12;
  }
  if (endHM[1].indexOf('pm') > -1 && endHM[0].indexOf('12')==-1 || endHM[1].indexOf('am')>-1 && endHM[0].indexOf('12')>-1 ) {
      endHour += 12;
  }                                
  //Add hours to start hour until end hour is research
  var startHourMove = startHour;
  var count = 0;
  if (startHour == endHour) {
      if (startMin == endMin) return 0;
      else if (endMin > startMin) return endMin - startMin;
  }
  if (endHour == 1) endHour = 25;
  while (startHourMove!== endHour-1) {
      if (startHourMove==24) startHourMove = 1;
      else startHourMove++;
      count++;
  }
  return (count*60) + (60 - Number(startMin))+ Number(endMin);         
}
//Calls function, read line is input in text box on coderbyte
CountingMinutesI(readline());          
        
     