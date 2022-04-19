function FAQanswers() {
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

function FAQtoggle() {
  const button = document.querySelector(".faq_radio-button");
  const header = document.querySelector(".faq_header");
  const faqMain = document.querySelector(".faq_main");
  const sysReqMain = document.querySelector(".sys-req_main");
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
          sysReqMain.classList.remove("hidden")
          faqMain.classList.add("hidden") 
        } else {
          button.children[0].classList.add("faq_radio-button-active");
          button.children[0].classList.remove("faq_radio-button-inactive");
          button.children[1].classList.add("faq_radio-button-inactive");
          button.children[1].classList.remove("faq_radio-button-active");
          header.children[0].classList.remove("hidden");
          header.children[1].classList.add("hidden");
          sysReqMain.classList.add("hidden")
          faqMain.classList.remove("hidden")     
        }
      }
  })
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
  FAQanswers();
  FAQtoggle();
  // initCheckbox();
});
