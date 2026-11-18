var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  
  mousewheel: {
    invert: false,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector(".nav");
const updateMenuState = () => {
  const isOpen = nav.classList.contains("is-open");
  nav.classList.toggle("is-open", isOpen);
  burgerBtn.classList.toggle("is-open", isOpen);
  burgerBtn.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
  burgerBtn.setAttribute("aria-expanded", String(isOpen));
};
burgerBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = nav.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-open", isOpen);
  updateMenuState();
});
document.addEventListener("click", (event) => {
  const clickedBurger = event.target.closest("#burger-btn");
  const isClickInsideNav = nav.contains(event.target);
  if (clickedBurger) {
    return;
  }
  if (!isClickInsideNav) {
    nav.classList.remove("is-open");
    burgerBtn.classList.remove("is-open");
    updateMenuState();
  }
});