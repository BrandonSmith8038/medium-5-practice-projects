class Game {
  constructor() {
    this.numCorrect = 0;
    this.questions = [];
    this.randNum = '';
    this.question = '';
    this.possbileAnswer = '';
    this.currentQuestion = 0;
    this.isGameOver = false;
  }

  async getQuestions() {
    const response = await fetch('questions.json');

    const data = await response.json();

    this.questions = data;

    return this.questions;
  }

  askQuestion() {
    this.question = this.questions[this.getCurrentQuestionIndex()].question;
    this.possbileAnswer = this.questions[
      this.getCurrentQuestionIndex()
    ].possbileAnswers;

    correctAnswer = this.questions[this.getCurrentQuestionIndex()]
      .correctAnswer;

    //Reenable Buttons For New Question
    ui.enableAnswerButtons();

    questionArea.innerText = this.question;
    ui.answerBtn1.innerText = this.possbileAnswer[0];
    ui.answerBtn2.innerText = this.possbileAnswer[1];
    ui.answerBtn3.innerText = this.possbileAnswer[2];
  }

  checkAnswer(chosenAnswer) {
    if (chosenAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      //If Correct Answer Chosen

      //Show Message
      ui.addMessage('green', 'CORRECT!');

      //Increase Score
      this.increaseScore();

      //Disable Buttons - Except for correct answer
      ui.disableAnswerButtons();

      //If Incorrect answer is chosen
    } else {
      //Show Message
      ui.addMessage(
        'red',
        `INCORRECT, The correct answer was: ${correctAnswer}`
      );

      //Disable Buttons - Except for correct answer
      ui.disableAnswerButtons();
    }
  }

  nextQuestion() {
    this.increaseCurrentQuestionIndex();
    //Dont Wan't to use splice until using randmon number again
    //this.questions.splice(this.currentQuestion, 1);
    if (this.getCurrentQuestionIndex() <= 9) {
      this.askQuestion();
      ui.emptyMessage();
    } else {
      ui.displayScore();
      ui.playAgain();
    }
  }

  increaseScore() {
    this.numCorrect++;
  }
  getScore() {
    return this.numCorrect;
  }

  getCurrentQuestionIndex() {
    return this.currentQuestion;
  }

  increaseCurrentQuestionIndex() {
    this.currentQuestion++;
  }

  getRandomNumber() {
    this.randNum = Math.floor(Math.random() * (this.questions.length - 1 + 1));
  }

  gameOver() {
    this.currentQuestion = 0;
    this.numCorrect = 0;
    ui.playAgain();
  }
}
