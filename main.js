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

//mudar a sombra do header quando der scroll na página //
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// container dos slides
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, //um slide por view
  pagination: {
    el: '.swiper-pagination' //elemento que recebe
  },
  mousewheel: true, //passa com o scrol do mouse
  keyboard: true // passa pelas setas do teclado
})
