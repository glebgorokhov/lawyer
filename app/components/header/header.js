/* eslint-disable */
const $ = window.$;

import {freeze, unfreeze} from "../../blocks/js-functions/freeze";

const
  burger = $(document).find('.js-burger-menu');

export function toggleBurger(hide) {
  const
    isActive = burger.hasClass('is-active'),
    toHide = hide || false;

  if (isActive !== toHide) return;

  freeze();

  switch (toHide) {
    case false :
      freeze();

      burger.show(0, function () {
        $(this).addClass('is-active');
      });

      break;

    case true :
      unfreeze();

      burger.removeClass('is-active');

      setTimeout(() => {
        burger.hide();
      }, globalOptions.animationDuration);

      break;
  }
}

export function burgerMenu() {
  $(document).on('click', '.js-burger-button', function () {
    toggleBurger();
  });

  $(document).on('click', '.js-burger-close', function () {
    toggleBurger(true);
  });

  $(window).resize(function () {
    if ($(window).width() >= globalOptions.sizes.md && burger.hasClass('is-active')) {
      toggleBurger(true);
    }
  });
}

export function mobileAccordion () {
  $(document).on('click', '.header__link', function (e) {
    const
      link = $(this),
      isMobile = $(window).width() < globalOptions.sizes.md,
      accordion = link.next('.header__submenu'),
      hasAccordion = accordion.length > 0;

    if (isMobile && hasAccordion) {
      e.preventDefault();
      link.toggleClass('is-active');
      accordion.slideToggle(globalOptions.animationDuration);
    }
  });
}

export function header() {
  burgerMenu();
  mobileAccordion();
}
/* eslint-enable */
