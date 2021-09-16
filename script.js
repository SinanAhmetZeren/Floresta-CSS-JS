"use strict";

//  MODULES ANIMATION - PULSE EFFECT

const All_modules = document.querySelectorAll(".module");

All_modules.forEach((module) =>
  module.addEventListener("mouseover", function () {
    module.classList.add("animate__animated", "animate__pulse");
  })
);

All_modules.forEach((module) =>
  module.addEventListener("mouseout", function () {
    module.classList.remove("animate__animated", "animate__pulse");
  })
);

All_modules.forEach((module) =>
  module.addEventListener("click", function () {
    module.classList.add("animate__animated", "animate__pulse");
  })
);

//---------------------------------------------------------//
// MODAL FUNCTIONALITY
//---------------------------------------------------------//

const All_modals = document.querySelectorAll(".modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
var related_modal = [];

// FUNCTION TO OPEN RELATED MODAL
const openModal = function (e) {
  const clicked = e.target.closest(".module");
  console.log(clicked);
  related_modal = document.querySelector(`.modal-${clicked.dataset.tab}`);
  console.log(related_modal.classList);
  related_modal.classList.remove("hidden");
  console.log(related_modal.classList);

  var Y_offset = window.pageYOffset;

  console.log(Y_offset);
  related_modal.style.top = `${Y_offset}px`;
};

const closeModal = function () {
  All_modals.forEach((modal) => modal.classList.add("hidden"));
};

All_modules.forEach((module) => module.addEventListener("click", openModal));
btnsCloseModal.forEach((btn) => btn.addEventListener("click", closeModal));

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !related_modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////
//////////// SLIDER ////////////////
////////////////////////////////////

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotsContainer = document.querySelector(".dots");

  // console.log("---0---");
  // console.log(slides);
  // console.log("---1---");
  // console.log(btnLeft);
  // console.log("---2---");
  // console.log(btnRight);
  // console.log("---3---");
  // console.log(dotsContainer);
  // console.log("---4---");

  let curSlide = 0;
  const maxSlide = slides.length;
  // console.log(curSlide, maxSlide);

  // functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class='dots__dot' data-slide=${i}></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };

  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

if (document.querySelector(".slide")) {
  slider();
}

// ---------------------
// -------- TABS -------

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

if (tabs.length) {
  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c) =>
      c.classList.remove("operations__content--active")
    );

    // Activate tab
    clicked.classList.add("operations__tab--active");

    // Activate content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });
}
//// SMOOTH SCROLL //////
const section1 = document.querySelector(".section-1");
const section1_link = document.querySelector("#go-to-section-1");
const section2 = document.querySelector(".section-2");
const section2_link = document.querySelector("#go-to-section-2");
const section_slider = document.querySelector(".section-slider");
const section_slider_link = document.querySelector("#go-to-section-slider");
const section_tabs = document.querySelector(".section-tabs");
const section_tabs_link = document.querySelector("#go-to-section-tabs");

// console.log(section_slider);
// console.log(section_slider_link);
// console.log(section_tabs);
// console.log(section_tabs_link);

////// SCROLL functions
if (section1) {
  const scrollTo1 = function () {
    section1.scrollIntoView({ behavior: "smooth" });
  };
  section1_link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo1();
  });
}
if (section2) {
  const scrollTo2 = function () {
    section2.scrollIntoView({ behavior: "smooth" });
  };
  section2_link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo2();
  });
}
if (section_slider) {
  const scrollToSlider = function () {
    section_slider.scrollIntoView({ behavior: "smooth" });
  };
  section_slider_link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSlider();
  });
}
if (section_tabs) {
  const scrollToTabs = function () {
    section_tabs.scrollIntoView({ behavior: "smooth" });
  };
  section_tabs_link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTabs();
  });
}
////
