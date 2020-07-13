"use strict";

for (let i = 0; i < 25; i++) {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => makeCard(data));
}

function makeCard(data) {
  const newCard = document.createElement("div");
  newCard.classList.add("card", "m-3");
  newCard.style.width = "width: 18rem";
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = data.quote;
  cardBody.appendChild(cardText);
  newCard.appendChild(cardBody);
  const quotesContainer = document.getElementById("quotesContainer");
  quotesContainer.appendChild(newCard);
}
