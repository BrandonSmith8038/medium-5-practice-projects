//Init UI Class
const ui = new UI();

//Init Game Class
const game = new Game();

const gameArea = document.getElementById('game');
const questionArea = document.getElementById('questionArea');
const answerBtn1 = document.getElementById('answer1');
const answerBtn2 = document.getElementById('answer2');
const answerBtn3 = document.getElementById('answer3');
const msgArea = document.querySelector('.message');
const nextBtn = document.getElementById('next');
const randNum = game.getRandomNumber();

let questions = [];
let currentQuestion = 0;
let correctAnswer = '';

function gameStart() {
  game.getQuestions().then(questions => {
    let possbileAnswer = questions[currentQuestion].possbileAnswers;
    let chosenAnswer = '';
    currentQuestion = 0;

    askQuestion();
    checkAnswer();
    next();

    //debug(randNum);
  });
}

function askQuestion() {
  let question = game.questions[randNum].question;
  let possbileAnswer = game.questions[randNum].possbileAnswers;

  nextBtn.textContent = 'Next Question';
  //numCorrectDiv.innerText = '';

  correctAnswer = game.questions[randNum].correctAnswer;
  answerBtn1.classList.remove('disabled');
  answerBtn2.classList.remove('disabled');
  answerBtn3.classList.remove('disabled');

  questionArea.innerText = question;
  answerBtn1.innerText = possbileAnswer[0];
  answerBtn2.innerText = possbileAnswer[1];
  answerBtn3.innerText = possbileAnswer[2];

  game.questions.splice(randNum, 1);
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
      disableBtns();
    } else {
      //If Incorrect answer is chosen

      //Show Message
      ui.addMessage(
        'red',
        `INCORRECT, The correct answer was: ${correctAnswer}`
      );
      disableBtns();
    }
  });
}

function disableBtns() {
  answerBtn1.classList.add('disabled');
  answerBtn2.classList.add('disabled');
  answerBtn3.classList.add('disabled');

  if (answerBtn1.text === correctAnswer) {
    answerBtn1.classList.remove('disabled');
  } else if (answerBtn2.text === correctAnswer) {
    answerBtn2.classList.remove('disabled');
  } else if (answerBtn3.text === correctAnswer) {
    answerBtn3.classList.remove('disabled');
  }
}

function next() {
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion <= 9) {
      msgArea.innerHTML = '';
      askQuestion();
    } else {
      ui.displayScore();
      nextBtn.textContent = 'Play Again?';
      nextBtn.classList.add('disabled');
      setTimeout(() => {
        nextBtn.classList.remove('disabled');
        gameStart();
      }, 5000);
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
