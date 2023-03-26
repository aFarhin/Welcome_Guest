const guests = ["2", "5", "3", "8"];

var nameInput = document.getElementById("nameInput");
var numInput = document.getElementById("numInput");
var welcomeMessage = document.getElementById("welcomeMessage");
var messageElement = document.getElementById("message");

function writeName() {
  let name = nameInput.value;
  if (name === "" || name === null) {
    messageElement.innerHTML = `Please enter your name to go to the next step!`;
    numInput.disabled = true;
  } else {
    numInput.disabled = false;
  }
}

function welcomeGuest() {
  let name = nameInput.value;
  let number = numInput.value.toString();

  if (guests.includes(number)) {
    welcomeMessage.innerHTML = `Welcome to my house, ${name}!`;
  }
    else if(number===""){
        welcomeMessage.innerHTML = `Hey ${name}, Please enter a number `
    }
  else {
    welcomeMessage.innerHTML = `Sorry, ${name}, you are not on the guest list.`;
  }
}

