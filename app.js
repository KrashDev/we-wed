$(document).ready(function(){

var deadline = 'May 5 2018 23:59:59 GMT+0200';

function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var days = document.getElementById(id);
    var hours = document.getElementById(id);
    var minutes = document.getElementById(id);
    var seconds = document.getElementById(id);
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }

//   initializeClock('clockdiv', deadline);

});