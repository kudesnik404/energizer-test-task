function initFAQ() {
  const card = document.querySelectorAll(".faq_main_card");
  const question = document.querySelectorAll(".faq_main_card_QA");
  const faqButton = document.querySelectorAll(".faq_main_card_button");

  for (let i = 0; i < 7; i++) {
    const answer = document.createElement("div");
    answer.classList.add("faq_main_card_answer", "hidden-answer");
    answer.innerText =
      "You download the software straight from our website. Simply complete your payment order and the download link will appear on the order confirmation page. The same download link will ...";
    question[i].append(answer);
    card[i].addEventListener("mousedown", () => {
      if (answer.classList.contains("shown-answer")) {
        answer.classList.remove("shown-answer");
        answer.classList.add("hidden-answer");
        faqButton[i].classList.remove("show-less-button");
        faqButton[i].classList.add("show-more-button");
      } else {
        answer.classList.remove("hidden-answer");
        answer.classList.add("shown-answer");
        faqButton[i].classList.remove("show-more-button");
        faqButton[i].classList.add("show-less-button");
      }
    });
  }
}

window.addEventListener("load", initFAQ);
