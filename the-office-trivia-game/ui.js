class UI {
  constructor() {
    this.numDiv = document.querySelector('.numCorrect');
    this.answerBtn1 = document.getElementById('answer1');
    this.answerBtn2 = document.getElementById('answer2');
    this.answerBtn3 = document.getElementById('answer3');
    this.nextBtn = document.getElementById('next');
  }
  addMessage(color, msg) {
    msgArea.innerHTML = `
		<div class='${color}-text'>
			<h4>${msg}</h4>
		</div>
	`;
  }

  displayScore() {
    this.numDiv.innerText = `
			Your Answered ${game.getScore()} Out Of 10
			`;
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
