/* eslint-disable */
// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
import OverlayScrollbars from 'overlayscrollbars';

const $ = window.$;

export function scrollbar() {
  OverlayScrollbars(document.querySelectorAll('.js-scrollbar'), {
    className: 'os-theme-dark',
    scrollbars: {
      clickScrolling: true,
    },
    callbacks : {
      onInitialized: function () {
        const
          yRatio = this.scroll().ratio.y,
          parent = $(this.getElements().target);

        if (!parent.hasClass('news')) return;

        yRatio > 0 ? parent.addClass('is-not-bottom') : parent.removeClass('is-not-bottom');
        yRatio < 1 ? parent.addClass('is-not-top') : parent.removeClass('is-not-top');
      },
      onScroll: function () {
        const
          yRatio = this.scroll().ratio.y,
          parent = $(this.getElements().target);

        if (!parent.hasClass('news')) return;

        yRatio > 0 ? parent.addClass('is-not-bottom') : parent.removeClass('is-not-bottom');
        yRatio < 1 ? parent.addClass('is-not-top') : parent.removeClass('is-not-top');
      },
    },
  });

  $(document).on('scroll', '.os-viewport', function () {
    const
      block = $(this),
      parent = block.closest('.news');

    console.log(block.scrollHeight, block.scrollTop());

    if (!parent.length) return;


  });
}
/* eslint-enable */
