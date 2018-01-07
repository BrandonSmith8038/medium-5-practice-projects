//Init UI Class
const ui = new UI();

//Init Game Class
const game = new Game(ui);

const gameArea = document.getElementById('game');
const questionArea = document.getElementById('questionArea');

const msgArea = document.querySelector('.message');

let questions = [];
//let currentQuestion = 0;
let correctAnswer = '';

function gameStart() {
  game.getQuestions().then(questions => {
    game.askQuestion();
    checkAnswer();
    next();
  });
}

function checkAnswer() {
  const answers = document.querySelector('.answers');

  answers.addEventListener('click', e => {
    const chosenAnswer = e.target.text;

    if (chosenAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      //If Correct Answer Chosen

      //Show Message
      ui.addMessage('green', 'CORRECT!');

      //Increase Score
      game.increaseScore();

      //Disable Buttons - Except for correct answer
      ui.disableAnswerButtons();
    } else {
      //If Incorrect answer is chosen

      //Show Message
      ui.addMessage(
        'red',
        `INCORRECT, The correct answer was: ${correctAnswer}`
      );
      //Disable Buttons - Except for correct answer
      ui.disableAnswerButtons();
    }
  });
}

function next() {
  ui.nextBtn.addEventListener('click', () => {
    game.increaseCurrentQuestionIndex();
    //Dont Wan't to use splice until using randmon number again
    //game.questions.splice(game.currentQuestion, 1);
    if (game.getCurrentQuestionIndex() <= 9) {
      msgArea.innerHTML = '';
      game.askQuestion();
    } else {
      ui.displayScore();
      ui.playAgain();
    }
  });
}

function getRandomQuestion() {
  // const randomQuestion = Math.floor(Math.random() * (questions.length - 1 + 1));

  return randomQuestion;
}

function debug() {
  console.log('***************Debug******************');
  console.clear();
  console.log('Questions', questions);
  console.log(('Current Question', randNum));
  console.log('Question', questions[randNum].question);
  console.log('Possible Answers', questions[randNum].possbileAnswers);
  console.log('Correct Answer', correctAnswer);
  console.log('Number Correct', game.getScore());
  console.log('Random Max', questions.length);
  console.log('Randon Number', randNum);
  console.log('***************Debug******************');
}

gameStart();
