function initFAQ() {
  const card = document.querySelectorAll(".faq_main_card");
  const faqButton = document.querySelectorAll(".faq_main_card_button");
  const answer = document.querySelectorAll(".faq_main_card_answer");

  for (let i = 0; i < 7; i++) {
    card[i].addEventListener("mousedown", () => {
      if (answer[i].classList.contains("shown-answer")) {
        answer[i].classList.remove("shown-answer");
        answer[i].classList.add("hidden-answer");
        faqButton[i].classList.remove("show-less-button");
        faqButton[i].classList.add("show-more-button");
      } else {
        answer[i].classList.remove("hidden-answer");
        answer[i].classList.add("shown-answer");
        faqButton[i].classList.remove("show-more-button");
        faqButton[i].classList.add("show-less-button");
      }
    });
  }
}

window.addEventListener("load", initFAQ);
