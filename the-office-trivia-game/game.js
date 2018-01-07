class Game {
  constructor() {
    this.numCorrect = 0;
    this.questions = [];
    this.randNum = '';
    this.question = '';
    this.possbileAnswer = '';
  }

  async getQuestions() {
    const response = await fetch('questions.json');

    const data = await response.json();

    this.questions = data;

    return this.questions;
  }

  askQuestion() {
    this.question = this.questions[3].question;
    this.possbileAnswer = this.questions[3].possbileAnswers;

    nextBtn.textContent = 'Next Question';
    //numCorrectDiv.innerText = '';

    correctAnswer = this.questions[3].correctAnswer;
    answerBtn1.classList.remove('disabled');
    answerBtn2.classList.remove('disabled');
    answerBtn3.classList.remove('disabled');

    questionArea.innerText = this.question;
    answerBtn1.innerText = this.possbileAnswer[0];
    answerBtn2.innerText = this.possbileAnswer[1];
    answerBtn3.innerText = this.possbileAnswer[2];

    this.questions.splice(3, 1);
  }

  increaseScore() {
    this.numCorrect++;

    return this.numCorrect;
  }
  getScore() {
    return this.numCorrect;
  }
  getRandomNumber() {
    this.randNum = Math.floor(Math.random() * (this.questions.length - 1 + 1));
  }
}
