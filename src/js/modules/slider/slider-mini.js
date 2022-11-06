import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, prev, next, activeClass, animate, autoplay) {
        super(container, prev, next, activeClass, animate, autoplay);
    }

    decoriseSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);

        if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    paused() {
		let autoplay = setInterval(() => {
			this.nextSlide();
		}, 5000);

		this.slides[0].parentNode.addEventListener('mouseenter', () => {
			clearInterval(autoplay);
		});

		this.next.forEach(item => {
			item.addEventListener('mouseenter', () => {
				clearInterval(autoplay);
			});
		});

		this.prev.forEach(item => {
			item.addEventListener('mouseenter', () => {
				clearInterval(autoplay);
			});
		});
	}

    nextSlide() {
        this.container.appendChild(this.slides[0]);
        this.decoriseSlides();
        this.moveButtonsToEnd();
        this.slides.forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                clearInterval();
            });
            slide.addEventListener('mouseleave', () => {
              this.nextSlide();
            });
        });
    }

    moveButtonsToEnd() { //элегантное решение проблемы кнопок в слойдере!
        this.slides.forEach((slide, i) => {
            if(slide.tagName === "BUTTON") {
                this.container.appendChild(this.slides[i]);
            }
        });
    }

    bindTriggers() {
            this.next.forEach(item => {
                item.addEventListener('click', () => {
                    this.nextSlide();
                });
            });
    
            this.prev.forEach(item => {
                item.addEventListener('click', () => {
                    let active = this.slides[0];
                    this.container.insertBefore(active, this.slides[this.slides.length - 1]);
                    this.decoriseSlides();
                    this.moveButtonsToEnd();
                });
            });
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decoriseSlides();

        if (this.autoplay) {
            this.paused();

            this.slides[0].parentNode.addEventListener('mouseleave', () => {
                this.paused();
            });

            this.next.forEach(item => {
                item.addEventListener('mouseleave', () => {
                    this.paused();
                });
            });
    
            this.prev.forEach(item => {
                item.addEventListener('mouseleave', () => {
                    this.paused();
                });
            });
        }
    }
}