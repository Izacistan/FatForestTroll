let toggle = document.getElementById("burger-icon");
let menu = document.getElementById("burger-menu");

// document.onclick = function(e) {
//   if(e.target.id !== 'menu' && e.target.id !== 'toggle'){
//     menu.classList.remove("active");
//     toggle.classList.remove("active");
//   }
// }

toggle.onclick = function() {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}
