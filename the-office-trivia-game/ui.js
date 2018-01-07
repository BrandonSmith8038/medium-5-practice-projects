class UI {
  constructor() {
    this.numDiv = document.querySelector('.numCorrect');
    this.answers = document.querySelector('.answers');
    this.answerBtn1 = document.getElementById('answer1');
    this.answerBtn2 = document.getElementById('answer2');
    this.answerBtn3 = document.getElementById('answer3');
    this.nextBtn = document.getElementById('next');
    this.msgArea = document.querySelector('.message');
  }

  chooseAnswer() {
    this.answers.addEventListener('click', e => {
      const answer = e.target.text;
      game.checkAnswer(answer);
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
			Your Answered ${game.getScore()} Out Of 10
			`;
  }

  disableAnswerButtons() {
    this.answerBtn1.classList.add('disabled');
    this.answerBtn2.classList.add('disabled');
    this.answerBtn3.classList.add('disabled');

    if (this.answerBtn1.text === correctAnswer) {
      this.answerBtn1.classList.remove('disabled');
    } else if (this.answerBtn2.text === correctAnswer) {
      this.answerBtn2.classList.remove('disabled');
    } else if (this.answerBtn3.text === correctAnswer) {
      this.answerBtn3.classList.remove('disabled');
    }
  }

  enableAnswerButtons() {
    this.answerBtn1.classList.remove('disabled');
    this.answerBtn2.classList.remove('disabled');
    this.answerBtn3.classList.remove('disabled');
  }

  playAgain() {
    const playAgain = document.getElementById('playAgain');

    playAgain.style.display = 'block';
    playAgain.addEventListener('click', location.reload);
  }
}
