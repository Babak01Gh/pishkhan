
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const swiperAdder = () => {
    const swiperMooyrag = new Swiper('.mooyragSwiper', {
        direction: 'horizontal',
        loop: true,
    
        breakpoints: {
            1200: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            430: {
              slidesPerView: 1,
              spaceBetween: 20
          },
            50:{
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
      });
      const swiperMooyrag_ = document.querySelector('.mooyragSwiper').swiper;
      setInterval(()=>swiperMooyrag_.slidePrev(),2000)
      const swiper = new Swiper('.swiperSeeAlso', {
        direction: 'horizontal',
        loop: false,
    
        breakpoints: {
            1200: {
              slidesPerView: 4.1,
              spaceBetween: 20
            },
            920: {
                slidesPerView: 3.1,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 2.1,
                spaceBetween: 20
            },
            430: {
              slidesPerView: 1.5,
              spaceBetween: 20
          },
            50:{
                slidesPerView: 1.06,
                spaceBetween: 10
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.btnNext',
          prevEl: '.btnPrev',
        }
      });

      const iranishSwiper = new Swiper('.iranishSwiper', {
        direction: 'horizontal',
        loop: false,
    
        breakpoints: {
            1000: {
              slidesPerView: 2.3,
              spaceBetween: 10
            },
            500: {
              slidesPerView: 1.2,
              spaceBetween: 10
            },
            50:{
              slidesPerView: 1.1,
              spaceBetween: 10
            }
        }
      });
}

export default swiperAdder