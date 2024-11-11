'use strict';

function startGame() {
  const userName = prompt("What is your name?");
  document.getElementById("welcomeMessage").textContent = `Hello, ${userName} Welcome! I hope you learn something new!`;

  // List of questions and answers
  const questions = [
    { question: "Do I ONLY have one pet?", answer: "no" },
    { question: "Do I work 2 jobs ?", answer: "yes" },
    { question: "Do I play ukulele?", answer: "yes" },
    { question: "Do I know Sign Language?", answer: "yes" },
    { question: "Is my favorit color green?", answer: "yes" }
  ];

  // Loop through questions and get answers
  let correctAnswers = 0;
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question + " (yes/no or y/n)").toLowerCase();

    // Normalize answers to yes/no format
    if (userAnswer === 'y') userAnswer = 'yes';
    if (userAnswer === 'n') userAnswer = 'no';

    // Check the answer
    if (userAnswer === questions[i].answer) {
      alert("Correct!");
      correctAnswers++;
    } else {
      alert("Nope! Not quite.");
    }
  }

  alert(`Thanks for playing, ${userName}! You got ${correctAnswers} out of 5 questions correct, you really did pay attention huh! :).`);
}

