const cardsContainer = document.getElementById("cards-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentElement = document.getElementById("current");
const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const addCardButton = document.getElementById("add-card");
const clearButton = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

let currentActiveCard = 0;
const cardsElement = [];

const cardsData = [
  {
    question: "attraper, capturer",
    answer: "fangen, er fängt, fing, hat gefangen",
  },
  {
    question: "faire de l'éscrime",
    answer: "fechten, er ficht, focht, hat gefochten",
  },
  {
    question: "trouver",
    answer: "finden, er findet, fand, hat gefunden",
  },
  {
    question: "voler (oiseau, avion)",
    answer: "fliegen, er fliegt, flog, ist geflogen",
  },
  {
    question: "donner",
    answer: "geben, er gibt, gab, hat gegeben",
  },
  {
    question: "aller",
    answer: "gehen, er geht, ging, ist gegangen",
  },
  {
    question: "profiter de",
    answer: "genießen, er genießt, genoss, hat genossen",
  },
  {
    question: "gagner",
    answer: "gewinnen, er gewinnt, gewann, hat gewonnen",
  },
  {
    question: "verser",
    answer: "gießen, er gießt, goss, hat gegossen",
  },
  {
    question: "tenir, s'arrêter",
    answer: "halten, er hält, hielt, hat gehalten",
  },
];
// const cardsData = getCardsData();

function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (index === 0) card.classList.add("active");
  card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
        <p>${data.question}</p>
    </div>
    <div class="inner-card-back">
        <p>${data.answer}</p>
    </div>
    </div>
  `;
  card.addEventListener("click", () => card.classList.toggle("show-answer"));
  cardsElement.push(card);
  cardsContainer.appendChild(card);
  updateCurrentText();
}

function updateCurrentText() {
  currentElement.innerText = `${currentActiveCard + 1}/${cardsElement.length}`;
}

// LocalStorage is not enabled in CodePen for security reasons
// function getCardsData() {
//   const cards = JSON.parse(localStorage.getItem("cards"));
//   return cards === null ? [] : cards;
// }

// function setCardsData(cards) {
//   localStorage.setItem("cards", JSON.stringify(cards));
//   history.go(0);
// }

// Event Listeners
nextButton.addEventListener("click", () => {
  cardsElement[currentActiveCard].className = "card left";
  currentActiveCard++;
  if (currentActiveCard > cardsElement.length - 1) {
    currentActiveCard = 0;
  }
  cardsElement[currentActiveCard].className = "card active";
  updateCurrentText();
});

prevButton.addEventListener("click", () => {
  cardsElement[currentActiveCard].className = "card right";
  currentActiveCard--;
  if (currentActiveCard < 0) {
    currentActiveCard = cardsElement.length - 1;
  }
  cardsElement[currentActiveCard].className = "card active";
  updateCurrentText();
});

showButton.addEventListener("click", () => addContainer.classList.add("show"));
hideButton.addEventListener("click", () =>
  addContainer.classList.remove("show")
);

addCardButton.addEventListener("click", () => {
  const question = questionElement.value;
  const answer = answerElement.value;
  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };
    createCard(newCard);
    questionElement.value = "";
    answerElement.value = "";
    addContainer.classList.remove("show");
    cardsData.push(newCard);
    // setCardsData(cardsData);
  }
});

clearButton.addEventListener("click", () => {
  //   localStorage.clear();
  cardsContainer.innerHTML = "";
  currentElement.innerText = "";
  //   history.go(0);
});

// Init
createCards();
