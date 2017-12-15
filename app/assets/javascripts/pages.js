var DEADLINE = new Date("Mar 5, 2018 00:00:00").getTime();
var counter = setInterval(function() {
  var now = new Date().getTime();
  var distance = DEADLINE - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('days').innerHTML = days+' :'
  document.getElementById('hours').innerHTML = hours+' :'
  document.getElementById('minutes').innerHTML = minutes+' :'
  document.getElementById('seconds').innerHTML = seconds
  distance < 0 ? clearInterval(counter) : ''
}, 1000);
