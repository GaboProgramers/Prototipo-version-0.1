let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

// Funcion Para Iconos del Carrito//

function mostrarResultado() {
   document.getElementById('resultado').style.display = 'block'
}

function ocultarP() {
   document.getElementById('resultado').style.display = 'none'
}

window.onscroll = function(){
   if(document.documentElement.scrollTop > 50) {
      document.querySelector('.go-top-container')
      .classList.add('show');
   } else {
      document.querySelector('.go-top-container')
      .classList.remove('show');
   }
}

document.querySelector('.go-top-container')
.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })
});