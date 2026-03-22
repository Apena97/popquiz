const username = prompt("What's your name?");
alert(`Hello, ${username}!`);
const selectionInput = prompt(`Have you ever seen any type of anime?
[1] YASSSS
[2] Nope
`);

const selection = Number(selectionInput);

if (Number.isNaN(selection)) {
  alert("You must enter a number.");
} else if (selection < 1 || selection > 2) {
  alert("Your number must be 1 or 2.");
} else {
  let item;
  let price;
  if (selection === 1) {
    item = "anime";
    price = "cool";
  } else {
    item = "this quiz";
    price = "will change your mind about anime!";
  }
  alert(`You think ${item} is ${price}!`);
}

const selectionInput2 = prompt(`which one of these shows is an anime?

[1] The twlight saga
[2] Dragon Ball Z
[3]Breaking Bad 
`);

const selection2 = Number(selectionInput2);

if (Number.isNaN(selection2)) {
  alert("You must enter a number.");
} else if (selection2 < 1 || selection2 > 3) {
  alert("Your number must be 1, 2, or 3.");
} else {
  let item;
  let price;
  if (selection2 === 1) {
    item = "The twlight saga";
    price = "is not an anime show";
  } else if (selection2 === 2) {
    item = "Dragon Ball Z";
    price = "is an anime show";
  } else {
    item = "Breaking Bad";
    price = "is not an anime show";
  }
  alert(`Correct! ${item} ${price}!`);
  alert(`Let's move on to the next question ${username}!`);
}
const selectionInput3 = prompt(`Which of these is a Anime Character?
[1] Edward Elric
[2] Son Goku
[3] Walter White
`);
const selection3 = Number(selectionInput3);
if (Number.isNaN(selection3)) {
  alert("You must enter a number.");
} else if (selection3 < 1 || selection3 > 3) {
  alert("Your number must be 1, 2, or 3.");
} else {
  let item;
  let price;
  if (selection3 === 1) {
    item = "Edward Elric";
    price = "is not an anime character";
  } else if (selection3 === 2) {
    item = "Son Goku";
    price = "is an anime character";
  } else {
    item = "Walter White";
    price = "is not an anime character";
  }
  alert(`Correct! ${item} ${price}!`);
}

const selectionInput4 = prompt(`Anime orginates from which country?
[1] Japan
[2] China
[3] Korea
`);
const selection4 = Number(selectionInput4);

if (Number.isNaN(selection4)) {
  alert("You must enter a number.");
} else if (selection4 < 1 || selection4 > 3) {
  alert("Your number must be 1, 2, or 3.");
} else {
  let item;
  if (selection4 === 1) {
    item = "Japan";
    price = "is the country where anime orginates from";
  } else if (selection4 === 2) {
    item = "China";
    price = "is not the country where anime orginates from";
  } else {
    item = "Korea";
    price = "is not the country where anime orginates from";
  }
  alert(`Correct! ${item} ${price}!`) 
  if (selection4 === 1) {
    alert(`Congrats ${username}! You got all the questions right!`);
  } else if (score === 0) {
    alert(`Good try ${username}! You got some of the questions right!`);
  } else {
    alert(`Better luck next time ${username}! You got some of the questions right!`);
  } else {
    alert(`Better luck next time ${username}! You got all the questions wrong!`);
  }
}
let score = 0;
if (selection === 1) {
  score++;
}
if (selection2 === 2) {
  score++;
}
if (selection3 === 2) {
  score++;
}
if (selection4 === 1) {
  score++;
}
alert(`You've completed the quiz ${username}! Your final score is ${score}/4!`);
