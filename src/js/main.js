import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/form";
import Accordion from "./modules/accordion";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container:'.page', btns:'.next', modal:'.hanson'});
    slider.render();

    const moduleSlider = new MainSlider({container: '.moduleapp', btns: '.next', prevModule: '.prevmodule', nextModule: '.nextmodule'});
    moduleSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init(); //фльтернативный способ вызова(как бы говоря, что вызывается только 1 раз)
    new Form('.form', 'assets/question.php').init();

    new Accordion('.plus__content').render();

    new Download('.download').init();
});