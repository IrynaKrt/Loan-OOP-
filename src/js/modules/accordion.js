export default class Accordion {
    constructor(btns) {
        this.btns = document.querySelectorAll(btns);
    }

    render() {
        try {
            this.btns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const sibling = btn.closest('.module__info-show').nextElementSibling;

                    sibling.classList.toggle('msg');
                    sibling.style.marginTop = '20px';
                    sibling.classList.add('animated', 'fadeIn');

                    // if(sibling.classList.closest('fadeInDown')) {
                    //     sibling.classList.add('animated', 'fadeInUp');
                    // }
                });
            });
        } catch (e) {}
    }
}