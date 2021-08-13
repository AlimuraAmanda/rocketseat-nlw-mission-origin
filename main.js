const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar a sombra do header quando der scroll na página
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// container dos slides
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, //um slide por view
  pagination: {
    el: '.swiper-pagination' //elemento que recebe
  },
  mousewheel: true, //passa com o scrol do mouse
  keyboard: true // passa pelas setas do teclado
})

// ScrollReveal: Mostra elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text, 
  #about .image, #about .text, 
  #services header, #services .cards,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)
//botão voltar para o topo
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
//quando aciona o scroll

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll(), backToTop()
})
