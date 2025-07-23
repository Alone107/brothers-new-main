const swiperReviewsHome = document.querySelector(".swiper-reviews-home");

if (swiperReviewsHome) {
  const swiperReviewsHome = new Swiper(".swiper-reviews-home", {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-prev-reviews-home",
      prevEl: ".swiper-button-next-reviews-home",
    },
  });
}

const swiperNewsHome = document.querySelector(".swiper-news-home");

if (swiperNewsHome) {
  const swiperNewsHome = new Swiper(".swiper-news-home", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.9,
    spaceBetween: 15,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-prev-news-home",
      prevEl: ".swiper-button-next-news-home",
    },
  });
}

// ---------burger-----------------

const burgerBtn = document.getElementById("burger");
const HeaderMenu = document.getElementById("header-menu");
const burgerClose = document.getElementById("close-burger");

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    HeaderMenu.classList.add("show");
  });

  burgerClose.addEventListener("click", CloseMenu);

  function CloseMenu() {
    HeaderMenu.classList.remove("show");
  }
  // Обработчик клика вне меню
  document.addEventListener("click", function (event) {
    const isClickOutside =
      !HeaderMenu.contains(event.target) && !burgerBtn.contains(event.target); // Исключаем саму кнопку бургера

    const isOpen = HeaderMenu.classList.contains("show");

    if (isClickOutside && isOpen) {
      CloseMenu();
    }
  });
}
