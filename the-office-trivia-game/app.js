//Init UI Class
const ui = new UI();

//Init Game Class
const game = new Game();

const gameArea = document.getElementById('game');
const questionArea = document.getElementById('questionArea');

const msgArea = document.querySelector('.message');

let questions = [];
//let currentQuestion = 0;
let correctAnswer = '';

function gameStart() {
  game.getQuestions().then(questions => {
    game.askQuestion();
    ui.chooseAnswer();
    next();
  });
}

function checkAnswer() {}

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
