function initFAQ() {
  const card = document.querySelectorAll(".faq_main_card");
  const faqButton = document.querySelectorAll(".faq_main_card_button");
  const answer = document.querySelectorAll(".faq_main_card_answer");

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
// function initCheckbox() {
//   const checkboxes = document.querySelectorAll("#checkbox");
//   for (let i = 0; i < 3; i++) {
//     checkboxes[i].addEventListener("click", () => {
//       console.log(checkboxes[i]);
//       checkboxes[i].classList.toggle("checked-ckeckbox")
//     })
//   }


// }

window.addEventListener("load", () => {
  initFAQ();
  initCheckbox();
});
