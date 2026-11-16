/* My Notes: HTML Class - kebab-case | HTML ID - snake_case | Javascript Identifiers - camelCase */

/* ==================================================
   Story Class and Objects
   ==================================================*/

class StoryContent {
    constructor(image, imageAlt, chapter, title, story) {
        this.image = image;
        this.imageAlt = imageAlt;
        this.chapter = chapter;
        this.title = title;
        this.story = story;
    }
}

/// Chapter 1 Story Data
const firstStory = new StoryContent(
    "images/chapter-1-illustration.png", 
    "Chapter 1 Illustration", 
    "Chapter 1:",
    "Fading Sketches",
    "Liam stepped into the halls of NEUST as a first-year BS Architecture student, driven by a genuine love for sketching and visual arts, yet entering a world he barely knew. His first semester became a blur of sleepless nights, coffee-stained desks, and endless plates. Though he managed to survive with passing grades, it came at a quiet cost—sacrificing meals and sleep that slowly dimmed his delicate health. What began as lighthearted jokes about giving up soon turned into a silent struggle, as the relentless workload drained both his energy and his spark."
);

// Chapter 2 Story Data
const secondStory = new StoryContent(
    "images/chapter-2-illustration.png", 
    "Chapter 2 Illustration", 
    "Chapter 2:",
    "Turning the Page",
    "By the second semester, the storm finally broke. Piles of plates with simultaneous deadlines loomed over him, and one particular assignment—designing a two-storey house front elevation from a complex floor plan—pushed him past his limit. Sitting alone late at night, staring at blank lines he could no longer picture, the tears finally spilled over. In that fragile moment, Liam realized his heart no longer belonged to this path. With a trembling voice, he opened up to his parents that night about shifting courses, and after initial disappointment gave way to grace, dropping his majors mid-semester felt like finally taking a deep breath."
);

// Chapter 3 Story Data
const thirdStory = new StoryContent(
    "images/chapter-3-illustration.png", 
    "Chapter 3 Illustration", 
    "Chapter 3:",
    "A New Canvas", 
    "As the school year closed and a single missing unit closed the door on BS Mathematics at CLSU, Liam took a leap of faith into BSIT at NEUST—with zero background in coding. Carrying little more than quiet courage and a whispered prayer, he earned the CICT Dean’s approval to step into an unfamiliar world of computers and logic. Surrounded by bright peers, he poured his heart into every lesson. Slowly, the heavy burden lifted. While challenges still came, he finally discovered a healthier rhythm, genuine friendships, and a welcoming space shaped by inspiring CICT instructors."
);

// Epilogue Story Data
const epilogue = new StoryContent(
    "images/epilogue-illustration.png", 
    "Epilogue Illustration", 
    "Epilogue:",
    "The Brightest Chapter", 
    "Among all the welcoming corners of his new home in CICT, one classroom shone the brightest—his Web Systems Technologies class, led by a professor whose clear guidance and warm encouragement made every lesson something to look forward to. She became a pillar of safety and inspiration in his college journey. And so, this little interactive journey leads to this golden envelope—a small reminder that finding the right path is even sweeter when guided by a mentor who makes the journey worthwhile."
);

/* ==================================================
   Quest Class and Objects
   ==================================================*/

class QuestContent {
    constructor(questNumber, question, correctAnswer, firstAnswerLabel, secondAnswerLabel, thirdAnswerLabel) {
        this.questNumber = questNumber;
        this.question = question;
        this.correctAnswer = correctAnswer; 
        this.firstAnswerLabel = firstAnswerLabel;
        this.secondAnswerLabel = secondAnswerLabel;
        this.thirdAnswerLabel = thirdAnswerLabel;
    }
}

// Quest 1 Checkpoint
const firstQuest = new QuestContent(
    "Quest 1", 
    "1. What was Liam’s original course when he first entered NEUST?", 
    "answer2",
    "BS Information Technology",
    "BS Architecture",
    "BS Mathematics"
);

// Quest 2 Checkpoint
const secondQuest = new QuestContent(
    "Quest 2", 
    "2. Why did Liam decide to drop his major subjects during the second semester?", 
    "answer2", 
    "He wanted to transfer to a different university.", 
    "The intense pressure and toll on his health made him realize he wanted to shift courses.", 
    "He failed his exams due to lack of interest."
);

// Quest 3 Checkpoint
const thirdQuest = new QuestContent(
    "Quest 3", 
    "3. What course did Liam ultimately choose to shift into despite having no prior programming background?", 
    "answer3", 
    "BS Data Science", 
    "BS Computer Science", 
    "BS Information Technology"
);

/* ==================================================
   DOM Element Selections
   ==================================================*/

// Card Elements
const firstCard = document.getElementById("first_card");
const secondCard = document.getElementById("second_card");
const thirdCard = document.getElementById("third_card");
const goldenCard = document.getElementById("golden_card");

// Overlay Modals
const currentStory = document.querySelector(".overlay-story");
const closeStory = document.getElementById("close_story_button");
const currentQuest = document.querySelector(".overlay-quest");
const closeQuest = document.getElementById("close_quest_button");

// Progress Tracking Counter
let collectedCardsCount = 0;
const yellowShadow = "rgba(218, 165, 70, 0.35) 0px 30px 60px, rgba(196, 145, 55, 0.25) 0px 20px 25px";

/* ==================================================
   Story Presentation Functions (DOM Manipulation)
   ==================================================*/

const storyImage = document.getElementById("story_image");
const storyChapter = document.getElementById("story_chapter");
const chapterTitle = document.getElementById("chapter_title");
const storyContent = document.getElementById("story_text");
const storyCardImg = document.querySelector(".story-card img");

// Populate story content into overlay elements
function setStory(tempStory) {
    storyImage.setAttribute("src", tempStory.image);
    storyImage.setAttribute("alt", tempStory.imageAlt);
    storyChapter.innerText = tempStory.chapter;
    chapterTitle.innerText = tempStory.title;
    storyContent.innerText = tempStory.story;
}

// Display story overlay
function revealStory(tempStory) {
    setStory(tempStory);
    currentStory.style.display = "flex";
}

// Close story overlay handler
closeStory.addEventListener("click", () => {
    currentStory.style.display = "none";
});

/* ==================================================
   Quest Presentation & Validation Logic
   ==================================================*/
   
// Variable to keep track of the currently open quest
let currentActiveQuest = null;

// Quest Contents Elements
const questHeading = document.getElementById("quest_heading");
const questionContent = document.getElementById("question");
const firstAnswerLabel = document.querySelector('label[for="answer1"]');
const secondAnswerLabel = document.querySelector('label[for="answer2"]');
const thirdAnswerLabel = document.querySelector('label[for="answer3"]');
const answerFeedbackMessage = document.getElementById("answer_feedback");
const confirmAnswerButton = document.getElementById("confirm_answer");

// Populate quest elements with correct question content and reset states
function setQuest(tempQuest) {
    currentActiveQuest = tempQuest;
    questHeading.innerText = tempQuest.questNumber;
    questionContent.innerText = tempQuest.question;

    firstAnswerLabel.innerText = tempQuest.firstAnswerLabel;
    secondAnswerLabel.innerText = tempQuest.secondAnswerLabel;
    thirdAnswerLabel.innerText = tempQuest.thirdAnswerLabel;

    // Reset radio buttons and feedback text
    document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);
    answerFeedbackMessage.innerText = "";
}

// Display quest overlay
function revealQuest(tempQuest) {
    setQuest(tempQuest);
    currentQuest.style.display = "flex";
}

// Close quest modal handler
closeQuest.addEventListener("click", () => {
    currentQuest.style.display = "none";
});

// Validate selected user answer against active quest
confirmAnswerButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        answerFeedbackMessage.innerText = "Please select an answer before confirming!";
        return;
    }

    // Compare selected radio value against the quest's correctAnswer property
    if (selectedOption.value === currentActiveQuest.correctAnswer) {
        answerFeedbackMessage.innerText = "Correct! Well done.";
        
        // Unlock corresponding chapters sequentially upon correct answer
        if (currentActiveQuest === firstQuest) {
            isSecondStoryUnlocked = true;
            collectedCardsCount++;
            updateSecondCard();
        } 
            else if (currentActiveQuest === secondQuest) {
                isThirdStoryUnlocked = true;
                collectedCardsCount++;
                updateThirdCard();
            } 
                else if (currentActiveQuest === thirdQuest) {
                    isEpilogueUnlocked = true;
                    collectedCardsCount++;
                    updateGoldenCard();
                }
    }
        else {
            answerFeedbackMessage.innerText = "Incorrect. Please review the story and try again.";
        }
});

/* ==================================================
   Chapter 1 Interactions
   ==================================================*/

const isFirstStoryUnlocked = true;
let isFirstStoryRead = false;

if (isFirstStoryUnlocked) {
    firstCard.style.cursor = "pointer";
    firstCard.style.boxShadow = yellowShadow;
    collectedCardsCount++;
}

firstCard.addEventListener("click", () => {
    currentStory.style.flexDirection = "inherit";
    storyCardImg.style.objectPosition = "49% 100%";
    revealStory(firstStory);
    isFirstStoryRead = true;
    updateSecondCard();
});

/* ==================================================
   Chapter 2 Interactions & State Management
   ==================================================*/

let isSecondStoryUnlocked = false;
let isSecondStoryRead = false;
const secondStoryReminder = document.getElementById("second_card_reminder");
const secondStoryBackground = document.getElementById("chapter2");

function updateSecondCard() {
    // If the first story haven't read and the second card haven't unlocked
    if (!isFirstStoryRead && !isSecondStoryUnlocked) {
        secondCard.style.cursor = "default";
    }
        else if (isFirstStoryRead && !isSecondStoryUnlocked) {
            secondStoryBackground.style.backgroundImage = "url('../images/unlocked-story-background.png')";
            secondStoryBackground.style.filter = "saturate(0.0)";
            secondCard.setAttribute("src", "images/chapter-2-card.png");
            secondCard.setAttribute("alt", "Chapter 2 Card Cover");
            secondCard.style.cursor = "pointer";
            secondCard.style.boxShadow = yellowShadow;
            secondStoryReminder.innerText = "";
        }
            else {
                secondCard.style.cursor = "pointer";
                secondStoryBackground.style.filter = "saturate(1.0)";
            }
}

updateSecondCard();

secondCard.addEventListener("click", () => {
    if (!isFirstStoryRead && !isSecondStoryUnlocked) {
        secondStoryReminder.innerText = "Please read Chapter 1 first to unlock this path.";
        updateSecondCard();
    } 
        else if (isFirstStoryRead && !isSecondStoryUnlocked) {
            updateSecondCard();
            revealQuest(firstQuest);
        } 
            else {
                currentStory.style.flexDirection = "row-reverse";
                storyCardImg.style.objectPosition = "35% 100%";
                revealStory(secondStory);
                isSecondStoryRead = true;
                updateThirdCard();
            }
});

/* ==================================================
   Chapter 3 Interactions & State Management
   ==================================================*/

let isThirdStoryUnlocked = false;
let isThirdStoryRead = false;
const thirdStoryReminder = document.getElementById("third_card_reminder");
const thirdStoryBackground = document.getElementById("chapter3");

function updateThirdCard() {
    if (!isSecondStoryRead && !isThirdStoryUnlocked) {
        thirdCard.style.cursor = "default";
    } 
        else if (isSecondStoryRead && !isThirdStoryUnlocked) {
            thirdStoryBackground.style.backgroundImage = "url('../images/unlocked-story-background.png')";
            thirdStoryBackground.style.filter = "saturate(0.0)";
            thirdCard.setAttribute("src", "images/chapter-3-card.png");
            thirdCard.setAttribute("alt", "Chapter 3 Card Cover");
            thirdCard.style.cursor = "pointer";
            thirdCard.style.boxShadow = yellowShadow;
            thirdStoryReminder.innerText = "";
        } 
            else {
                thirdCard.style.cursor = "pointer";
                thirdStoryBackground.style.filter = "saturate(1.0)";
            }
}

updateThirdCard();

thirdCard.addEventListener("click", () => {
    if (collectedCardsCount < 2) {
        thirdStoryReminder.innerText = "Complete previous chapters and checkpoints first.";
        return;
    }

    if (!isSecondStoryRead && !isThirdStoryUnlocked) {
        thirdStoryReminder.innerText = "Please read Chapter 2 first.";
        updateThirdCard();
    } 
        else if (isSecondStoryRead && !isThirdStoryUnlocked) {
            updateThirdCard();
            revealQuest(secondQuest);
        } 
            else {
                currentStory.style.flexDirection = "inherit";
                storyCardImg.style.objectPosition = "46% 100%";
                revealStory(thirdStory);
                isThirdStoryRead = true;
                updateGoldenCard();
            }
});

/* ==================================================
   Epilogue Interactions & State Management
   ==================================================*/
let isEpilogueUnlocked = false;
let isEpilogueStoryRead = false;
const epilogueReminder = document.getElementById("golden_card_reminder");
const epilogueStoryBackground = document.getElementById("epilogue");

function updateGoldenCard() {
    if (!isThirdStoryRead && !isEpilogueUnlocked) {
        goldenCard.style.cursor = "default";
    } 
        else if (isThirdStoryRead && !isEpilogueUnlocked) {
            epilogueStoryBackground.style.backgroundImage = "url('../images/special-unlocked-story-background.png')";
            epilogueStoryBackground.style.filter = "saturate(0.0)";
            goldenCard.setAttribute("src", "images/epilogue-card.png");
            goldenCard.setAttribute("alt", "Epilogue Golden Envelope Card");
            goldenCard.style.cursor = "pointer";
            goldenCard.style.boxShadow = yellowShadow;
            epilogueReminder.innerText = "";
        } 
            else {
                goldenCard.style.cursor = "pointer";
                epilogueStoryBackground.style.filter = "saturate(1.0)";
            }
}

updateGoldenCard();

goldenCard.addEventListener("click", () => {
    if (collectedCardsCount < 3) {
        epilogueReminder.innerText = "Complete all preceding chapters first.";
        return;
    }

    if (!isThirdStoryRead && !isEpilogueUnlocked) {
        epilogueReminder.innerText = "Please read Chapter 3 first.";
        updateGoldenCard();
    } 
        else if (isThirdStoryRead && !isEpilogueUnlocked) {
            updateGoldenCard();
            revealQuest(thirdQuest);
        } 
            else {
                currentStory.style.flexDirection = "row-reverse";
                storyCardImg.style.objectPosition = "65% 100%";
                revealStory(epilogue);
                isEpilogueStoryRead = true;
                updateClaimButton();
            }
});

/* ==================================================
   Message Card Reveal (Reward Claim)
   ==================================================*/
const claimButton = document.getElementById("claim_button");

function updateClaimButton() {
    if (isEpilogueStoryRead) {
        claimButton.style.display = "flex";
    }
}

claimButton.addEventListener("click", () => {
    // Selects every element with the "container" class and hides them
    const containers = document.querySelectorAll(".container");
    const showMessageSection = document.querySelector(".message-container");
    
    containers.forEach(container => {
        container.classList.add("hideContent");
    });

    // Display the message card section cleanly centered with the table background
    showMessageSection.style.display = "flex";
});