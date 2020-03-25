/* eslint-disable */
// https://idangero.us/swiper/api/
import Swiper from 'swiper/js/swiper.js';

const $ = window.$;

export function slider() {
  $(document).find('.js-slider').each(function () {
    const
      block = $(this),
      container = block.find('.swiper-container');

    const mySlider = new Swiper(container, {
      loop: false,
      speed: 700,
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      breakpoints: { // Mobile-first
        0: {
          pagination: {
            el: block.find('.slider__dots'),
            clickable: true,
            bulletClass: 'slider__dot',
            bulletActiveClass: 'is-active',
          },
        },
        1024: {
          pagination: {
            el: block.find('.slider__tabs'),
            clickable: true,
            bulletClass: 'slider__tab',
            bulletActiveClass: 'is-active',
            renderBullet: function (index, className) {
              return `
                <span class="${className}">
                  ${$(this.slides[index]).find('.maps__title').text()}
                </span>
              `;
            }
          },
        },
      },
    });
  });
}
/* eslint-enable */
