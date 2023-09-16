$(document).ready(function() {
  const slider = $('.slider');
  const numbers = $('.over__numbers--data');

  slider.on('afterChange', function(event, slick, currentSlide) {
    numbers.removeClass('active');
    numbers.eq(currentSlide).addClass('active');
  });

  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
     
  });
});
 // JavaScript код
document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('video');
  const playButton = document.querySelector('.video__play-button');
  const stopButton = document.querySelector('.video__stop-button');

  playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
    stopButton.style.display = 'block';
  });

  stopButton.addEventListener('click', () => {
    video.pause();
  
    stopButton.style.display = 'none';
    playButton.style.display = 'block';
  });
});



 $('.projects__slider').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3, // Опечатка в этой строке
    responsive: [
       {
         breakpoint: 880,
         settings: {
           slidesToShow: 2,
           infinite: true,
         } // Закройте этот объект настройки
       },
       {
         breakpoint: 650,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
         } // Закройте этот объект настройки
       }
     ]
});


    $('.partners__clients--slider').slick({
      arrows: true,
       slidesToShow:1,
    });
  
 document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__burger--menu');

  // При загрузке страницы убираем класс open из меню
  burgerButton.classList.remove('open');
  menu.classList.remove('open');

  burgerButton.addEventListener('click', function () {
    this.classList.toggle('open');
    menu.classList.toggle('open');
  });
 });

   // Получаем ссылку на кнопку
  const goToTopButton = document.getElementById('goToTopButton');

  // Добавляем обработчик клика
  goToTopButton.addEventListener('click', () => {
    // Прокручиваем страницу вверх с плавной анимацией
    window.scrollTo({
      top: 0, // Верх страницы
      behavior: 'smooth', // С плавной анимацией
    });
  });
              const menuButtons = document.querySelectorAll('.menu-button');
        const navMenus = document.querySelectorAll('.nav__item--menu');

        // Добавляем слушатель события для каждой кнопки
        menuButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Скрываем все меню
                navMenus.forEach((menu, menuIndex) => {
                    if (menuIndex !== index) {
                        menu.classList.remove('active');
                    }
                });

                // Отображаем или скрываем меню для текущей кнопки
                navMenus[index].classList.toggle('active');
            });
        });

const offerButtons = document.querySelectorAll('.btn__offer');
const offerinfos = document.querySelectorAll('.offer__info--subtitle');
        // Добавляем слушатель события для каждой кнопки
       offerButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Скрываем все меню
                offerinfos.forEach((menu, menuIndex) => {
                    if (menuIndex !== index) {
                        menu.classList.remove('active');
                    }
                });

                // Отображаем или скрываем меню для текущей кнопки
                offerinfos[index].classList.toggle('active');
            });
       });
        

       $('.cottage__slider').slick({
    arrows: true,
    dots: true,
       });
  
$(document).ready(function() {
  $('.history__slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });

  const slider = $('.history__slider');
  const monthItems = $('.history__item--name ');

  slider.on('afterChange', function(event, slick, currentSlide) {
    monthItems.removeClass('active');
    monthItems.eq(currentSlide).addClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.getElementById('subscribeButton');
  const closeButton = document.querySelector('.cross__btn');
  const formContainer = document.getElementById('subscribeFormContainer');

  subscribeButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    formContainer.style.display = 'none';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const sendCVButton = document.getElementById('sendCVButton');
  const closeButton = document.querySelector('#cvFormContainer .cross__btn');
  const cvFormContainer = document.getElementById('cvFormContainer');

  sendCVButton.addEventListener('click', function() {
    cvFormContainer.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    cvFormContainer.style.display = 'none';
  });
});
// Получаем кнопку "Send CV", затемненный фон и кнопку для закрытия формы
const sendCVButton = document.getElementById("sendCVButton");
const subscribeButton = document.getElementById("subscribeButton");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".cross__btn");


// Обработчик события для открытия затемненного фона при нажатии на кнопку "Send CV"
sendCVButton.addEventListener("click", function() {
  overlay.style.display = "block";
  
});
subscribeButton.addEventListener("click", function () {
  overlay.style.display = "block";
})

// Обработчик события для закрытия затемненного фона при нажатии на крестик
closeButton.addEventListener("click", function() {
  overlay.style.display = "none";
});

// Обработчик события для закрытия затемненного фона при клике на затемненную область
overlay.addEventListener("click", function() {
  overlay.style.display = "none";
});





