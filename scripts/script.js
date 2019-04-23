document.addEventListener('scroll', e => {
  let elem = document.getElementsByTagName('header')[0]
  if (window.pageYOffset > 75) {
    if (!elem.classList.contains('scrolled')) {
      elem.classList.add('scrolled')
    }
  } else {
    elem.classList.remove('scrolled')
  }
})
