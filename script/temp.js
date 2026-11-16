const firstCard = document.getElementById("card1");
const story = document.querySelector(".overlay-story");
const closeStory = document.getElementById("close-story-button");
const storyForm = document.querySelector(".overlay-form");
const closeStoryForm = document.getElementById("close-story-form-button");

let cardCollectedCount = 0;

/* ==================================================
   General Card Functions
   ==================================================*/
function openStory() {
    story.style.display = "flex";
}

// Hide story when close button is clicked
closeStory.addEventListener("click", function() {
    story.style.display = "none";
});

function openForm() {
    storyForm.style.display = "flex";
}

closeStoryForm.addEventListener("click", function() {
    storyForm.style.display = "none";
});



/* ==================================================
   First Card
   ==================================================*/
// Show story when card is clicked
let isFirstCardOpened = false;

firstCard.addEventListener("click", function() {
    openStory();
    isFirstCardOpened = true;
    updateSecondCard();
});

/* ========== Story Section ========== */
const firstStory = 


/* ==================================================
   Second Card
   ==================================================*/
// Checks whether second card is unlocked
const secondCard = document.getElementById("card2");
let isSecondCardUnlocked = false;
let isSecondCardOpened = false;

const secondCardReminder = document.getElementById("secondCardReminder");

function updateSecondCard() {
    // If the first story haven't read and the second card haven't unlocked
    if (isFirstCardOpened === false && isSecondCardUnlocked === false) {
        secondCard.style.cursor = "not-allowed";
        secondCard.style.filter = "saturate(0.0)";
    }
        else if (isFirstCardOpened === true && isSecondCardUnlocked === false) {
            secondCard.style.cursor = "cursor";
            secondCard.style.filter = "saturate(0.5)";
        }
            else {
                secondCard.style.cursor = "cursor";
                secondCard.style.filter = "saturate(1.0)";
            }
}

secondCard.addEventListener("click", function() {
    if (isFirstCardOpened === false && isSecondCardUnlocked === false) {
        secondCardReminder.innerText = "Please read Chapter 1 first";
    }
        else if (isFirstCardOpened === true && isSecondCardUnlocked === false ) {
            secondCardReminder.innerText = "";
            openForm();
        }
            else {
                openStory();
            }
});

/* ==================================================
   Third Card
   ==================================================*/
// Checks whether third card is unlocked
const thirdCard = document.getElementById("card3");
let isThirdCardUnlocked = false;

const thirdCardReminder = document.getElementById("thirdCardReminder");

// If the second story haven't read and the second card haven't unlocked
if (isSecondCardOpened === false && isThirdCardUnlocked === false) {
    thirdCard.style.cursor = "auto";
    thirdCard.style.filter = "saturate(0.0)";
    thirdCard.addEventListener("click", function() {
        thirdCardReminder.innerText = "Please unlock the Chapter 2 first";
    });
}
    else if (isSecondCardOpened === true && isThirdCardUnlocked === false) {
        thirdCard.style.cursor = "cursor";
        thirdCard.style.filter = "saturate(0.5)"
        thirdCard.addEventListener("click", function() {
            openForm();
        });
        thirdCardReminder.innerText = "";
    }
        else {
            thirdCard.style.cursor = "cursor";
            thirdCard.style.filter = "saturate(1.0)";
        }


/* ==================================================
   Gold Card
   ==================================================*/
// Check whether the gold card is unlockable
const goldCard = document.getElementById("goldCard");
let isGoldCardUnlocked = false;

const goldCardReminder = document.getElementById("goldCardReminder");

if (cardCollectedCount !== 3) {
    goldCard.style.cursor = "auto";
    goldCard.style.filter = "saturate(0.0)";
    goldCard.addEventListener("click", function() {
        goldCardReminder.innerText = "Please collect all 3 cards first.";
    });
}
    else {
        thirdCard.style.cursor = "cursor";
        thirdCard.style.filter = "saturate(1.0)";
    }