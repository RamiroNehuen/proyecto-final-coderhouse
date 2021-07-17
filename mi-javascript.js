// PARA LAS TARJETAS SECCION NOTICIAS

function myFunction(numero) {
  var dots = document.querySelector(`.novedad[prueba="${numero}"] .dots`);
  var moreText = document.querySelector(`.novedad[prueba="${numero}"] #more`); 
  var btnText = document.querySelector(`.novedad[prueba="${numero}"] .myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer más";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos";
    moreText.style.display = "inline";
  }
}



// PARA EL NAV
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  
  if(offset > 75)
    nav.classList.add('scroll')
  else 
    nav.classList.remove('scroll')
});
