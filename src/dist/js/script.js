const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const button = document.querySelector(".fa-circle-arrow-up")

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("is-active")
  menu.classList.toggle("menu-active")
})

window.addEventListener('scroll', () => {
  windowPosition = window.scrollY > 250
  button.classList.toggle("btn-active", windowPosition)

  menu.classList.remove("menu-active")
  hamburger.classList.remove("is-active")
})
