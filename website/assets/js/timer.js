var timeLeft = 30;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        location.replace("https://www.discord.com");
      } else {
        elem.innerHTML = 'Redirecting you to the official website in ' + timeLeft + 's ...';
        timeLeft--;
      }
    }
