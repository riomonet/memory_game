const gameContainer = document.getElementById("game");

let card1 = null;
let card2 = null;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


function handleCardClick(event) {
    // you can use event.target to see which element was clicked

    if (card1 != null && card2 != null)
	return;
   
    console.log("you just clicked", event.target);
    event.target.style.backgroundColor = event.target.getAttribute('class');

    if (card1 == null) {
	card1 = event.target;
	card1.removeEventListener('click', handleCardClick);
    }

    else {
	card2 = event.target;
	card2.removeEventListener('click',handleCardClick);
	setTimeout(function() {
	    if (card1.getAttribute('class') != card2.getAttribute('class')) {
		card1.style.backgroundColor = 'darkgrey';
		card1.addEventListener('click',handleCardClick);
		card2.style.backgroundColor = 'darkgrey';
		card2.addEventListener('click',handleCardClick);
	    }
    	    card1 = null;
	    card2 = null;

	}, 1000);
    }
}
	    
// when the DOM loads

createDivsForColors(shuffledColors);


    // Add a button that when clicked will start the game
    // Add a button that when clicked will restart the game once it has ended
    // For every guess made, increment a score variable and display the score while the game is played
    // Store the lowest-scoring game in local storage, so that players can see a record of the best game played.
    // Allow for any number of cards to appear
    // Instead of hard-coding colors, try something different like random colors or even images!
