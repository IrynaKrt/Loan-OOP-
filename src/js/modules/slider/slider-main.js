import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns, modal) {
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

    render() {
        try{
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

        this.showSlides(this.slideIndex);
        } catch(e) {}
    }
}