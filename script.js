function startCountdown(count, callback) {
    if (count > 0) {
      document.getElementById('countdown').innerHTML = count;
      setTimeout(function() {
        startCountdown(count - 1, callback);
      }, 1000); // Delay of 1000ms (1 second)
    } else {
      document.getElementById('countdown').innerHTML = 'Happy Independence Day!';
      // Call the callback function after the countdown
      if (typeof callback === 'function') {
        callback();
      }
    }
  }

  // Callback function to be executed after the countdown
  function displayFinalMessage() {
    console.log('Final message displayed!');
    // You can perform additional actions here if needed
  }

  // Start the countdown from 10 with the callback function
  startCountdown(10, displayFinalMessage);