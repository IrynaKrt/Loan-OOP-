import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns, modal, prevModule, nextModule) {
        super(container, btns, modal);
    }
    
    showSlides(n) {
        if(n > this.slides.length) {
            this.slideIndex = 1;
        }

        if(n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';

        this.modal.forEach(item => {
            item.style.display = 'none';
            if(this.slideIndex === 3) {
                setTimeout(function () {
                    item.style.display = 'block';
                    item.classList.add('animated', 'fadeInUp');
                }, 3000);
            }
        });
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        
        this.prevModule.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                this.plusSlides(-1);
            });
        });

        this.nextModule.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();//отмена всплытия событий

                this.plusSlides(1);
            });
        });
    }

    render() {
        if(this.container) {//исправление бага с многостраничым проектом
        this.bindTriggers();
        this.showSlides(this.slideIndex);
        } 
    }
}