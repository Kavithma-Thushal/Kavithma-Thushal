var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});