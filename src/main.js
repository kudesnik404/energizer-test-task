function FAQanswers() {
  const card = document.querySelectorAll(".faq_main_card"),
    faqButton = document.querySelectorAll(".faq_main_card_button"),
    answer = document.querySelectorAll(".faq_main_card_answer");

  for (let i = 0; i < 7; i++) {
    card[i].addEventListener("mousedown", () => {
      if (answer[i].classList.contains("hidden")) {
        answer[i].classList.remove("hidden");
        faqButton[i].classList.remove("show-more-button");
        faqButton[i].classList.add("show-less-button");
      } else {
        answer[i].classList.add("hidden");
        faqButton[i].classList.remove("show-less-button");
        faqButton[i].classList.add("show-more-button");
      }
    });
  }
}

function FAQtoggle() {
  const button = document.querySelector(".faq_radio-button"),
    header = document.querySelector(".faq_header"),
    faqMain = document.querySelector(".faq_main"),
    sysReqMain = document.querySelector(".sys-req_main");
  for (let i = 0; i < 2; i++) {
    button.children[i].addEventListener("mousedown", () => {
      if (button.children[i].classList.contains("faq_radio-button-inactive")) {
        if (i === 1) {
          button.children[1].classList.add("faq_radio-button-active");
          button.children[1].classList.remove("faq_radio-button-inactive");
          button.children[0].classList.add("faq_radio-button-inactive");
          button.children[0].classList.remove("faq_radio-button-active");
          header.children[1].classList.remove("hidden");
          header.children[0].classList.add("hidden");
          sysReqMain.classList.remove("hidden");
          faqMain.classList.add("hidden");
        } else {
          button.children[0].classList.add("faq_radio-button-active");
          button.children[0].classList.remove("faq_radio-button-inactive");
          button.children[1].classList.add("faq_radio-button-inactive");
          button.children[1].classList.remove("faq_radio-button-active");
          header.children[0].classList.remove("hidden");
          header.children[1].classList.add("hidden");
          sysReqMain.classList.add("hidden");
          faqMain.classList.remove("hidden");
        }
      }
    });
  }
}

function autoRenewal() {
  const checkboxes = document.querySelectorAll(".auto-renewal_checkbox");
  for (let i = 0; i < 3; i++) {
    checkboxes[i].addEventListener("mousedown", () => {
      checkboxes[i].classList.toggle("checked-checkbox");
    });
  }
}

function slider() {
  const slider = document.querySelector(".offers-container"),
    slides = Array.from(document.querySelectorAll(".offer-card"));

  let isDragging = false,
    // startPos = 0,
    // currentTranslate = 0,
    // prevTranslate = 0,
    animationID = 0,
    currentIndex = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchend", touchEnd);
    slide.addEventListener("touchmove", touchMove);
  });

  window.oncontextmenu = function (e) {
    console.log(window.innerWidth);
    if (window.innerWidth < 1280) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };

  function touchStart(index) {
    return function (event) {
      currentIndex = index;
      // startPos = getPositionX(event);
      isDragging = true;

      animationID = requestAnimationFrame(animation);
    };
  }

  function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    // const movedBy = currentTranslate - prevTranslate;

    // if (movedBy < -150 && currentIndex < slides.length - 1) currentIndex += 1
    // if (movedBy > 150 && currentIndex > 0) currentIndex -= 1

    // setPositionByIndex()

    slider.classList.remove("grabbing");
  }

  function touchMove(event) {
    // const currentPosition = getPositionX(event);
    // currentTranslate = prevTranslate + currentPosition - startPos;
    slider.classList.add("grabbing");
  }

  // function getPositionX(event) {
  //   return event.touches[0].clientX;
  // }

  function animation() {
    // setSliderPosition()
    if (isDragging) requestAnimationFrame(animation);
  }

  // function setSliderPosition() {
  //   slider.style.transform = `translateX(${currentTranslate}px)`
  // }

  //как же я сейчас жалею, что начала делать это всё на ванильном js, а не реакте....

  // function setPositionByIndex() {

  //   currentTranslate = currentIndex * 174
  //   prevTranslate = currentTranslate
  //   setSliderPosition()
  // }


}

window.addEventListener("load", () => {
  FAQanswers();
  FAQtoggle();
  autoRenewal();
  slider();
});
