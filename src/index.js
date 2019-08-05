const cardNodes = document.querySelectorAll("[data-visible]");
const buttonNode = document.getElementById("button");
const messageNode = document.getElementById("message");
const CARDS_PER_CLICK = 5;

buttonNode.addEventListener(
  "click",
  function() {
    let counter = 0;

    for (let i = 0; i < cardNodes.length; i++) {
      if (cardNodes[i].dataset.visible === "false" && counter <= CARDS_PER_CLICK) {
        cardNodes[i].dataset.visible = "true";
        counter++;
      }
    }

    let visibleCards = document.querySelectorAll("[data-visible='true']");
    if (visibleCards.length == cardNodes.length) {
      buttonNode.style.display = "none";
      messageNode.style.display = "block";
    }
  },
  false
);
