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

//funcion para Regresar Al inicio de la pagina//
/*
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});*/

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