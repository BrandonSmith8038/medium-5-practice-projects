//Init UI Class
const ui = new UI();

//Init Game Class
const game = new Game();

const gameArea = document.getElementById('game');
const questionArea = document.getElementById('questionArea');

let questions = [];
//let currentQuestion = 0;
let correctAnswer = '';

function gameStart() {
  game.getQuestions().then(questions => {
    game.askQuestion();
    ui.chooseAnswer();
    ui.nextButtonClick();
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
