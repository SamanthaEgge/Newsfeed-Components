const toggleMenu = () => {
  // menu.style.display = (menu.style.display === 'none' ? 'block' : 'none');
  menu.classList.toggle('menu--open')
  menu.classList.contains('menu--open') ? TweenMax.to('.menu--open', 2, {x: 350}) : TweenMax.to('.menu', 2, {x: 0});
  
  // if (menu.classList.contains('menu--open')) {
  //   menuOp

  // }
}

// Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class

const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that 
// calls toggleMenu
menuButton.addEventListener('click', toggleMenu);


// //// Window click closes menu
// window.addEventListener('mouseup', event => {
//   // event.stopPropagation();
//   if (menu.classList.contains('menu--open')) {
//     })    
//     menu.classList.remove('menu--open');
//   }
// //}
// )

// window.addEventListener("mouseup", function(event) {
//   if (
//     event.target != menu &&
//     event.target != menuButton &&
//     event.target != menu > ul >li &&
//     event.target != menu > ul
//   ) {
//     toggleMenu();
//   }
// });
