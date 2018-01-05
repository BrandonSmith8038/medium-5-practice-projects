const questions = [
  {
    question: 'Who Owns A Beet Farm?',
    possbileAnswers: ['Dwight', 'Toby', 'Erin'],
    correctAnswer: 'Dwight'
  },
  {
    question: "What Is Jim's Last Name?",
    possbileAnswers: ['Schrute', 'Mcquire', 'Halpert'],
    correctAnswer: 'Halpert'
  },
  {
    question: 'Who Did Michael Get Married To?',
    possbileAnswers: ['Holly Flax', 'Jan Levinson', 'Carol Stills'],
    correctAnswer: 'Holly Flax'
  },
  {
    question: 'What Is The Name Of The Company They Work At',
    possbileAnswers: [
      'Scranton Paper Company',
      'Dunder Scott Paper Company',
      'Dunder Mifflin Paper Company'
    ],
    correctAnswer: 'Dunder Mifflin Paper Company'
  },
  {
    question: 'What City Does The Show Take Place In?',
    possbileAnswers: ['Philidephia', 'Scranton', 'Chicago'],
    correctAnswer: 'Scranton'
  },
  {
    question: 'What State Is That In?',
    possbileAnswers: ['Indiana', 'Pennslyvania', 'Iowa'],
    correctAnswer: 'Pennslyvania'
  },
  {
    question: 'How Many Seasons Of The Show Where There?',
    possbileAnswers: ['7', '8', '9'],
    correctAnswer: '9'
  },
  {
    question: 'Where Does Michael Take Everyone For His Birthday?',
    possbileAnswers: ['Ice Skating', 'Bowling', 'The Zoo'],
    correctAnswer: 'Ice Skating'
  },
  {
    question: 'Near What Tourist Attraction do Jim and Pam get Married?',
    possbileAnswers: [
      'Statue Of Liberty',
      'Niagra Falls',
      'Empire State Building'
    ],
    correctAnswer: 'Niagra Falls'
  },
  {
    question: 'What Job Does Stanley Do?',
    possbileAnswers: ['Sales', 'Human Resources', 'Accounting'],
    correctAnswer: 'Accounting'
  }
];

const gameArea = document.getElementById('game');
const questionArea = document.getElementById('questionArea');
const answerBtn1 = document.getElementById('answer1');
const answerBtn2 = document.getElementById('answer2');
const answerBtn3 = document.getElementById('answer3');
const msgArea = document.querySelector('.message');
const nextBtn = document.getElementById('next');
const numCorrectDiv = document.querySelector('.numCorrect');

let currentQuestion = 8;
let correctAnswer = '';
let possbileAnswer = questions[currentQuestion].possbileAnswers;
let numCorrect = 0;

gameStart();

function gameStart() {
  debug();

  let chosenAnswer = '';
  nextBtn.textContent = 'Next Question';
  numCorrectDiv.innerText = '';
  numCorrect = 0;

  askQuestion();
  checkAnswer();
  next();
}

function askQuestion() {
  let question = questions[currentQuestion].question;
  let possbileAnswer = questions[currentQuestion].possbileAnswers;

  correctAnswer = questions[currentQuestion].correctAnswer;
  answerBtn1.classList.remove('disabled');
  answerBtn2.classList.remove('disabled');
  answerBtn3.classList.remove('disabled');

  questionArea.innerText = question;
  answerBtn1.innerText = possbileAnswer[0];
  answerBtn2.innerText = possbileAnswer[1];
  answerBtn3.innerText = possbileAnswer[2];
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
      askQuestion();
      msgArea.innerHTML = '';
    } else {
      numCorrectDiv.innerText = `
			Your Answered ${numCorrect} Out Of 10
			`;
      nextBtn.textContent = 'Play Again?';
      currentQuestion = 0;
      gameStart();
    }
  });
}

function debug() {
  console.log('***************Debug******************');
  console.log('Questions', questions);
  console.log(('Current Question', currentQuestion));
  console.log('Question', questions[currentQuestion].question);
  console.log('Possible Answers', possbileAnswer);
  console.log('Correct Answer', correctAnswer);
  console.log('Number Correct', numCorrect);
  console.log('***************Debug******************');
}
