/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let int = time.split(":")[0].parseInt(); 
  if(int < 12){
    return "Good Morning";
  } else if (12 < time < 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(str){
  node = 
  node.textContent = greet(str); 
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
