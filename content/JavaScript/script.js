class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.active = 0;
        this.init();
    }

    activeSlide(index) {
        this.active = index;
        this.items.forEach((item) => item.classList.remove("active"));
        this.items[index].classList.add("active");
    }

    prev() {
        if(this.active > 0){
            this.activeSlide(this.active - 1);
        }else {
            this.activeSlide(this.items.length - 1)
        }
    }

    next() {
        // Necessário pegar a quantidade total de slides e subtrair 1 do valor, tendo em vista que por padrão um slide já é selecionado
        if(this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        }else {
            this.activeSlide(0)
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector(".slide-next");
        const prevBtn = this.slide.querySelector(".slide-prev");
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }

    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll(".slide-items > *");
        this.activeSlide(0);
        this.addNavigation();
    }
};

new SlideStories("slide");