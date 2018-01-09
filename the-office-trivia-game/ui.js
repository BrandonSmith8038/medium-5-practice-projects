class UI {
  constructor() {
    this.numDiv = document.querySelector('.numCorrect');
    this.answers = document.querySelector('.answers');
    this.answerBtn1 = document.getElementById('answer1');
    this.answerBtn2 = document.getElementById('answer2');
    this.answerBtn3 = document.getElementById('answer3');
    this.nextBtn = document.getElementById('next');
    this.msgArea = document.querySelector('.message');
    this.questionAnswers = document.getElementById('questionAnswers');
    this.winningPicDiv = document.getElementById('winningpic');
  }

  chooseAnswer() {
    this.answers.addEventListener('click', e => {
      console.log(e);
      if (e.target.className !== 'answers') {
        const answer = e.target.textContent;
        game.checkAnswer(answer);
      }
    });
  }

  nextButtonClick() {
    this.nextBtn.addEventListener('click', () => {
      game.nextQuestion();
    });
  }

  addMessage(color, msg) {
    this.msgArea.innerHTML = `
		<div class='${color}-text'>
			<p>${msg}</p>
		</div>
	`;
  }

  emptyMessage() {
    this.msgArea.innerHTML = '';
  }

  displayScore() {
    this.numDiv.innerText = `
			You Answered ${game.getScore()} Out Of 10
			`;
  }

  disableAnswerButtons() {
    this.answerBtn1.classList.add('disabled');
    this.answerBtn2.classList.add('disabled');
    this.answerBtn3.classList.add('disabled');

    if (this.answerBtn1.text === game.correctAnswer) {
      this.answerBtn1.classList.remove('disabled');
    } else if (this.answerBtn2.text === game.correctAnswer) {
      this.answerBtn2.classList.remove('disabled');
    } else if (this.answerBtn3.text === game.correctAnswer) {
      this.answerBtn3.classList.remove('disabled');
    }
  }

  enableAnswerButtons() {
    this.answerBtn1.classList.remove('disabled');
    this.answerBtn2.classList.remove('disabled');
    this.answerBtn3.classList.remove('disabled');
  }

  removeQuestionandAnswer() {
    this.questionAnswers.innerHTML = ' ';
  }

  playAgain() {
    const playAgain = document.getElementById('playAgain');

    ui.nextBtn.style.display = 'none';
    this.msgArea.style.display = 'none';

    playAgain.style.display = 'block';
    playAgain.addEventListener('click', location.reload);
  }

  showWinningPic(picture, name) {
    this.winningPicDiv.innerHTML = `
		<img src='${picture}' id='winning-pic' class='img-responsive'>
		<h4 class='black-text'>Your Are ${name}</h4>
		`;
  }
}
