export default class Download {
    constructor(btns) {
        this.btns = document.querySelectorAll(btns);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');

        link.setAttribute('href', path);
        link.setAttribute('download', 'nice_picture');

        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.downloadItem(this.path);
            });
        });
    }


}