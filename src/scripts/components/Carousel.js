import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
    };
    this.init();
  }

  setOptions() {
    // Cherche pour l'attribut data-autoplay
    // Si trouvé, ajoute l'option autoplay avec un délai de 3000ms
    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
      };
    }

    // Cherche pour l'attribut data-loop
    // Si trouvé, ajoute l'option loop au swiper
    // pour permettre le défilement infini des diapositives
    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }
  }

  init() {
    console.log('Carousel component initialized');
    this.setOptions();
    new Swiper(this.element, this.options);
  }
}
