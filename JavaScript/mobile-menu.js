function toggleClass() {
  // When 'burger-menu' icon is clicked,
  // it adds the class 'toggleCls' ON or OFF with each click.
  // ('toggleCls' is currently called on the 'burger-icon' 'div')
  let menu = document.querySelector(".burger-menu"); //Get 'burger-menu' class
  menu.classList.toggle("toggleCls");

  // 1) When 'burger-icon' div is clicked,
  //  it adds the class 'toggleAnimate' ON or OFF with each click.
  //  ('toggleAnimate' is currently called on the 'burger-icon' 'div')

  // 2) This activates the animation for the 'burger-menu' icon with each click.
  let burger = document.querySelector(".burger-icon");
  burger.classList.toggle("toggleAnimate");
}
