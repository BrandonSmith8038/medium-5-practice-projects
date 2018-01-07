class Game {
  constructor() {
    this.numCorrect = 0;
    this.questions = [];
  }
  increaseScore() {
    this.numCorrect++;

    return this.numCorrect;
  }
  getScore() {
    return this.numCorrect;
  }
  getRandomNumber(questions) {
    const randNum = Math.floor(Math.random() * (this.questions.length - 1 + 1));

    return randNum;
  }

  async getQuestions() {
    const response = await fetch('questions.json');

    const data = await response.json();

    this.questions = data;

    return this.questions;
  }
}
