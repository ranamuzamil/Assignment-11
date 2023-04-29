// 8. Write a JavaScript program to create a Clock.

// Note: The output will come every second.

// Expected Console Output :

// "14:37:42"

// "14:37:43"

// "14:37:44"

// "14:37:45"

// "14:37:46"

// "14:37:47"
function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0' );
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  setInterval(displayTime, 1000);