import '../scss/index.scss'
import '../scss/style.scss'
import '../scss/adaptive.scss'

import './index2.js'
import './index3.js'
import './index4.js'

if (window.innerWidth <= 767) {
    let swiper = new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
console.log('It works!')
