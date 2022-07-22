function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

function scheduleTime(){
  alert("Agendamento feito!")
}

var boxAgend = document.getElementById("boxSchedule");

// Get the button that opens the modal
var btn = document.getElementById("scheduleButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  boxAgend.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  boxAgend.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == boxAgend) {
    boxAgend.style.display = "none";
  }
}


