class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.active = 0;
        this.activeSlide(3);
    }

    activeSlide(index) {
        this.active = index;
        this.items = this.slide.querySelectorAll(".slide-items > *");
        this.items[index].classList.add("active");
    }
};

new SlideStories("slide");