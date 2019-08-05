const cardNodes = document.getElementsByClassName("js-card");
const cardNodesArray = [];
const buttonNode = document.getElementById("button");
const messageNode = document.getElementById("message");

for (let index = 0; index < cardNodes.length; index++) {
  cardNodesArray.push(cardNodes[index]);
}

buttonNode.addEventListener(
  "click",
  function() {
    for (let index = 3; index < cardNodesArray.length; index++) {
      cardNodesArray[index].style.display = "block";
      cardNodesArray[index].classList.add("fade-in");

      setTimeout(() => {
        cardNodesArray[index].classList.remove("fade-in");
      }, 400);
    }
    buttonNode.style.display = "none";
    messageNode.style.display = "block";
  },
  false
);
