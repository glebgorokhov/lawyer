/* eslint-disable */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import {scrollbar} from '../blocks/scrollbar/scrollbar';
import {slider} from '../blocks/slider/slider';
import {uiKitNavigation} from "../pages/ui-kit/ui-kit";
import {header} from "../components/header/header";
import {news} from "../components/news/news";
import {resize} from "../blocks/js-functions/resize";

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  scrollbar();
  slider();
  uiKitNavigation();
  header();
  news();
  resize();
});
/* eslint-enable */
