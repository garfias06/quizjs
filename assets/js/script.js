let quizQuestions = [
    {
        question: "Who invented the game of Basketball?",
        options: ["James Naismith", "Michael Jordan", "Larry Bird", "Magic Johnson"],
        answer: "James Naismith"
    },
    {
        question: "How many players are there in a basketball team?",
        options: ["5", "6", "7", "11"],
        answer: "5"
    },
    {
        question: "What is a free throw in basketball?",
        options: ["A shot from the three-point line", "A shot taken from anywhere", "A penalty shot from the free-throw line", "A shot taken when a player is free"],
        answer: "A penalty shot from the free-throw line"
    },
    {
        question: "Who is the all-time leading scorer in the NBA?",
        options: ["Kareem Abdul-Jabbar", "Michael Jordan", "LeBron James", "Kobe Bryant"],
        answer: "Kareem Abdul-Jabbar"
    },
    {
        question: "What is a 'dunk' in basketball?",
        options: ["A type of dribble", "A shot where the ball is thrown downward into the basket", "A high arcing shot", "A defensive move"],
        answer: "A shot where the ball is thrown downward into the basket"
    },
    {
        question: "Which team won the first NBA game?",
        options: ["New York Knicks", "Toronto Huskies", "Boston Celtics", "Chicago Bulls"],
        answer: "New York Knicks"
    },
    {
        question: "What is the diameter of a basketball hoop in inches?",
        options: ["16", "18", "20", "22"],
        answer: "18"
    },
    {
        question: "Who holds the record for the most points in a single NBA game?",
        options: ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "James Harden"],
        answer: "Wilt Chamberlain"
    },
    {
        question: "What is 'traveling' in basketball?",
        options: ["Moving with the ball without dribbling", "Running too fast", "Jumping with the ball", "Passing the ball"],
        answer: "Moving with the ball without dribbling"
    },
    {
        question: "What is the maximum number of steps that can be taken without dribbling?",
        options: ["1", "2", "3", "4"],
        answer: "2"
    }
];

let welcomePage = document.getElementById("welcome-page");
let startBtn = document.getElementById("start-quiz");
let questionsCard = document.getElementById("questions");
let nextBtn = document.createElement("button");
let startOverBtn = document.createElement("button");
let clockTimer = document.createElement("p");
let currentQuestion = 0;
let timer = 90;
let timeInterval;

function showWelcomePage() {
    questionsCard.innerHTML = "";
    welcomePage.setAttribute("style", "display:block");
    currentQuestion = 0;
}

function selectAnswer(answer, options) {

    if (answer != options) {
        timer -= 5;
        currentQuestion++;
        showQuestion();
    } else {
        currentQuestion++;
        showQuestion();
    }
    if (timer <= 0) {
        clearInterval(timeInterval);
        showWelcomePage();
        clockTimer.textContent = "";
    }
}

function showQuestion() {

    questionsCard.innerHTML = "";

    if (currentQuestion < quizQuestions.length) {
        let nbaQuestion = quizQuestions[currentQuestion];
        let options = nbaQuestion.options;
        let answer = nbaQuestion.answer;
        let questions = document.createElement("p");

        questions.textContent = nbaQuestion.question;
        questionsCard.appendChild(questions);

        options.forEach(function (difOptions) {
            let answers = document.createElement("ul");
            let possibleAnswers = document.createElement("li");
            let answerBtn = document.createElement("button");

            answerBtn.textContent = difOptions;
            possibleAnswers.appendChild(answerBtn);
            answers.appendChild(possibleAnswers);
            questionsCard.appendChild(answers);
            answerBtn.addEventListener("click", function () { selectAnswer(answer, difOptions) });
        })
    } else {
        questionsCard.textContent = "You have completed this quiz!";
        startOverBtn.textContent = "Start Over";
        questionsCard.appendChild(startOverBtn);
        clearInterval(timeInterval);
        timer=90;
    }
}
function startQuiz() {
    timeInterval = setInterval(function () {
        timer--;
        clockTimer.textContent = timer + " sec left";
        questionsCard.appendChild(clockTimer);
    }, 1000);

    showQuestion();
}

function hideWelcomePage() {
    welcomePage.setAttribute("style", "display: none");
    startQuiz();
};

startBtn.addEventListener("click", hideWelcomePage);
startOverBtn.addEventListener("click", showWelcomePage);