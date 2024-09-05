let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let selections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


// window.ondblclick = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//             });
//         }
//     });
// }
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toogle('active');

}