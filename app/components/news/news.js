/* eslint-disable */
import shave from 'shave';

const $ = window.$;

function shaving () {
  function shaveThis () {
    const
      isMobile = $(window).width() < globalOptions.sizes.md;

    if (isMobile) {
      shave('.js-news-text', 10000);
    } else {
      shave('.js-news-text', 10000);
      shave('.js-news-text', 84);
    }
  }

  shaveThis();

  $(window).on('resize', shaveThis);
}

export function news () {
  shaving();
}
/* eslint-enable */
