/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let splits = time.split(":")[0]
  let int = parseInt(splits); 
  if(int < 12){
    return "Good Morning";
  } else if (12 < time < 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(str){
  const node = document.getElementById('greeting'); 
  node.textContent = greet(str); 
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
