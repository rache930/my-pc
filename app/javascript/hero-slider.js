// import Swiper  from 'swiper'
import Swiper from'swiper/bundle';
// class HeroSlider {
//     constructor(el) {
//         this.el = el;
//         this.swiper = this._initSwiper();
//     }

//     _initSwiper() {
//         return new Swiper(this.el, {
//             // Optional parameters
//             // direction: 'vertical',
//             loop: true,
//             grabCursor: true,
//             effect: 'coverflow',
//             centeredSlides: true,
//             slidesPerView: 1,
//             speed: 1000,
//             breakpoints: {
//                 1024: {
//                     slidesPerView: 2,
//                 }
//             },
//         });
//     }

//     start(options = {}) {
//         options = Object.assign({
//             delay: 4000,
//             disableOnInteraction: false
//         }, options);
        
//         this.swiper.params.autoplay = options;
//         this.swiper.autoplay.start();
//     }
//     stop() {
//         this.swiper.autoplay.stop();
//     }
// }

// // $(document).ready(function() {
//     const swiper = new Swiper('.swiper-container', {
//       effect: 'coverflow',
//       // エフェクトの設定
//       coverflowEffect: {
//         depth: 500,
//         modifire: 20
//       },
//   　　 // 回転
//       rotate: 30,
//       // 一度に表示するスライド数
//       slidesPerView: 2,
//       // 現在のスライドを真ん中に
//       centeredSlides: true,
//   　　 // スライドがループ
//       loop: true,
//   　　 //スライドが入れ替わる速さ
//       speed: 1000,
//       // 自動でスライド
//       autoplay: {
//         delay: 800
//       },
//     });
//   });

// window.addEventListener('DOMContentLoaded', function() {
//   console.log('hello');

//   const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
// });

// import { Autoplay, Pagination, Swiper } from 'swiper'
// Swiper.use([Autoplay, Pagination])
// new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 1,
//     centeredSlides: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     speed: 2000,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true,
//     },
//   })

class HeroSlider {
    constructor(el) {
      this.el = el;
      this.swiper = this._initSwiper();
    }
  
    _initSwiper() {
      return new Swiper(this.el, {
        loop: true,
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
            delay: 5000,
          },        
        breakpoints: {
          1024: {
            slidesPerView: 1.2,
          }
        },
      });
    }
  
  
    //   start(options = {}) {
    //       options = Object.assign({
    //           delay: 4000,
    //           disableOnInteraction: false
    //       }, options);
    //       console.log(this.swiper.params.autoplay)
    //       this.swiper.params.autoplay = options;
    //       this.swiper.autoplay.start();
    //   }
    //   stop() {
    //       this.swiper.autoplay.stop();
    //   }
  }
  

document.addEventListener('DOMContentLoaded', function() {
    const hero = new HeroSlider('.swiper-container');
    // hero.start();
  });