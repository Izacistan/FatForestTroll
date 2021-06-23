let body = document.getElementById("container");
let toggle = document.getElementById("burger-icon");
let menu = document.getElementById("burger-menu");

toggle.onclick = function() {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}

body.onclick = function clickAway(e) {
  if(e.target.id !== 'menu' && e.target.id !== 'toggle'){
    menu.classList.remove("active");
    toggle.classList.remove("active");
  }
}
