const gameArea = document.getElementById('game');
const questionArea = document.getElementById('questionArea');
const answerBtn1 = document.getElementById('answer1');
const answerBtn2 = document.getElementById('answer2');
const answerBtn3 = document.getElementById('answer3');
const msgArea = document.querySelector('.message');
const nextBtn = document.getElementById('next');
const numCorrectDiv = document.querySelector('.numCorrect');

let questions = [];
let currentQuestion = 0;
let correctAnswer = '';
let numCorrect = 0;

function gameStart() {
  let possbileAnswer = questions[currentQuestion].possbileAnswers;
  let chosenAnswer = '';
  currentQuestion = 0;

  numCorrect = 0;

  askQuestion();
  checkAnswer();
  next();
}

function getQuestions() {
  fetch('./questions.json')
    .then(response => response.json())
    .then(data => {
      questions = data;
      console.log('Game Start');
      gameStart();
    })
    .catch(err => {
      console.log(err);
    });
}

function askQuestion() {
  const randNum = getRandomQuestion();

  let question = questions[randNum].question;
  let possbileAnswer = questions[randNum].possbileAnswers;

  nextBtn.textContent = 'Next Question';
  numCorrectDiv.innerText = '';

  correctAnswer = questions[randNum].correctAnswer;
  answerBtn1.classList.remove('disabled');
  answerBtn2.classList.remove('disabled');
  answerBtn3.classList.remove('disabled');

  questionArea.innerText = question;
  answerBtn1.innerText = possbileAnswer[0];
  answerBtn2.innerText = possbileAnswer[1];
  answerBtn3.innerText = possbileAnswer[2];

  debug(randNum);

  questions.splice(randNum, 1);
}

function checkAnswer() {
  const answers = document.querySelector('.answers');

  answers.addEventListener('click', e => {
    const chosenAnswer = e.target.text;

    if (chosenAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      addMessage('green', 'CORRECT!');
      numCorrect++;
      disableBtns();
    } else {
      addMessage('red', `INCORRECT, The correct answer was: ${correctAnswer}`);
      disableBtns();
    }
  });
}

function addMessage(color, msg) {
  msgArea.innerHTML = `
		<div class='${color}-text'>
			<h4>${msg}</h4>
		</div>
	`;
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
      numCorrectDiv.innerText = `
			Your Answered ${numCorrect} Out Of 10
			`;
      nextBtn.textContent = 'Play Again?';
      currentQuestion = 0;
      nextBtn.classList.add('disabled');
      setTimeout(() => {
        getQuestions();
        nextBtn.classList.remove('disabled');
      }, 5000);
    }
  });
}

function getRandomQuestion() {
  const randomQuestion = Math.floor(Math.random() * (questions.length - 1 + 1));

  return randomQuestion;
}

function debug(randNum) {
  console.log('***************Debug******************');
  console.clear();
  console.log('Questions', questions);
  console.log(('Current Question', randNum));
  console.log('Question', questions[randNum].question);
  console.log('Possible Answers', questions[randNum].possbileAnswers);
  console.log('Correct Answer', correctAnswer);
  console.log('Number Correct', numCorrect);
  console.log('Random Max', questions.length);
  console.log('Randon Number', randNum);
  console.log('***************Debug******************');
}

getQuestions();
