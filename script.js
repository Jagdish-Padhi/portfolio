// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let changingWord = document.querySelector(".typing-word");

let wordsArray = [
  "Programmer",
  "Problem Solver",
  "Lifelong learner",
];

const wordChanger = async () => {
  for (i = 0; i < wordsArray.length; i++) {
    changingWord.innerText = wordsArray[i];

    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  wordChanger()
};

wordChanger();
