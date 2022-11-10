export default class Slider {
    constructor({container = null, 
                btns = null, 
                modal = null, 
                next = null, 
                prev = null,
                prevModule,
                nextModule,
                activeClass = '',
                animate,
                autoplay} = {}){
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;} catch(e) {}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelectorAll(prev);
        this.next = document.querySelectorAll(next);
        this.prevModule = document.querySelectorAll(prevModule);
        this.nextModule = document.querySelectorAll(nextModule);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        this.modal = document.querySelectorAll(modal);
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
        try {this.showSlides(this.slideIndex += n);} catch(e) {}
    }

    render() {
        try {
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