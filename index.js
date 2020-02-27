/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let int = time.parseInt(); 
  if(int < 12:00){
    return "Good Morning";
  } else if (12:00 < time < 17:00){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}; 

function displayMessage(str){
  node = 
  node.textContent = greet(time); 
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
