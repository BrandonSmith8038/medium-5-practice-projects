class UI {
  constructor() {
    this.numDiv = document.querySelector('.numCorrect');
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
}
