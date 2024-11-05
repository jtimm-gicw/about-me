`use strict`
//Welcome user
/*let user = prompt('What is your name?');

alert ('Hi, ' + user + '.' + ' Welcome to my site!');

// 1
let person = prompt('Are you a night owl or an early bird?');
if (person == 'early bird') {
    alert('The early bird catches the worm!')
}
else if (person == 'night owl') {
    alert('Night owls are awake until the break of dawn!')
};

// 2
let like= prompt('Does Jason like sweets?');
if (like == 'yes') {
    alert('Correct! Jason has a sweet tooth.')
}
else if (like == 'no') {
    alert('Sorry! His dentist would disagree with you.')
};

// 3
let color= prompt('What is Jason\'s favorite color? Blue or red?');

if  (color == 'blue') {
    alert('Gray-blue, actually. But, just blue is fine.')
}
else if (color == 'red') {
    alert('No Jason does not like red.')
}
else if (color || 'blue', 'red') {
    alert('You don\'t know Jason\'s favorite color. I\'m shocked!')
};

// 4
let movie= prompt('Which movie does Jason like more...Barbie or Star Wars?');
if (movie == 'Star Wars') {
    alert('It\'s true. Jason has seen every Star Wars movie at least 10 times.')
}
else if (movie == 'Barbie') {
    alert('I mean who doesn\'t like Barbie?  Jason, that\'s who!')
}
else if (movie || 'Barbie', 'Star Wars'){
    alert('I guess you don\'t know Jason. ;)') 
};

// 5
let appear= prompt('Could Brad Pitt and Jason be twins?');
if (appear == 'yes') {
    alert('Of course if you squint hard enogh, they could be.')
}
else if (appear !== 'yes') {
    alert('You just haven\'t looked hard enough! Try again.')
}
*/


// Guess the number


// let guessANumber = 'What number am I thinking of between one and 20';
// let attempts = 4;
// let answer = 16;
// let response = null;

// while (response !== answer) {

//     if (!attempts) {
//       alert('No more attempt. Nice try!');
//       break;
//     }

//     response = parseInt(prompt(guessANumber));
//   attempts -= 1;
//   if (response === answer) {
//     alert('You must be psychic!');
//     userscore += 1;
//   }

//   if (response < answer) {
//     alert('Wow, that\'s too low! Try again.');
//   }

//   if (response > answer) {
//     alert('Oooo, too high! Try again.');
//   }
// };
// // Guessing Game
// let userPoints = 0;

// console.log('Welcome to Jason\'s page!');

// // Guessing Game
// alert('Welcome to my guessing game!');

// let user = prompt('What is your name?');
// // Ensure the user provides a name (not null or empty)
// while (!user) {
//     user = prompt('Come on! Just tell me your name');
// }
// let firstName = user;

// // Movie list
// let favMovie = ['Indiana Jones & the Temple of Doom', 'Matrix', 'Star Wars', 'Snatch', 'Happy Gilmore'];
// let correctAnswer = 'Star Wars';

// alert('Try to guess Jason\'s favorite movie from the following list: ' + favMovie.join(', ') + '. You have 5 tries!');

// let guessedCorrectly = false; // Track if the correct movie is guessed

// for (let i = 0; i < 5; i++) {
//     let answer = prompt('Guess the favorite movie!').trim();
    
//     if (answer === correctAnswer) {
//         userPoints++;
//         alert('Correct! Jason\'s favorite movie is indeed ' + correctAnswer + '.');
//         guessedCorrectly = true; // Set flag to true to indicate correct guess
//         break; // Exit the loop if guessed correctly
//     } else {
//         alert('Incorrect guess. Try again!');
//     }
// }

// // Final alert
// if (!guessedCorrectly) {
//     alert('You\'ve used all your guesses! The correct answer was ' + correctAnswer + '.');
// }

// alert('Greetings ' + firstName + '! You have ' + userPoints + ' point(s). Thanks for playing!');