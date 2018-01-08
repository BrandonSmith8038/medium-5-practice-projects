class Game {
  constructor() {
    this.numCorrect = 0;
    this.questions = [];
    this.randNum = '';
    this.question = '';
    this.possbileAnswer = '';
    this.correctAnswer = '';
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
    this.randNum = this.getRandomNumber();

    this.question = this.questions[this.randNum].question;
    this.possbileAnswer = this.questions[this.randNum].possbileAnswers;

    this.correctAnswer = this.questions[this.randNum].correctAnswer;

    //Reenable Buttons For New Question
    ui.enableAnswerButtons();

    questionArea.innerText = this.question;
    ui.answerBtn1.innerText = this.possbileAnswer[0];
    ui.answerBtn2.innerText = this.possbileAnswer[1];
    ui.answerBtn3.innerText = this.possbileAnswer[2];
  }

  checkAnswer(chosenAnswer) {
    this.removeQuestions();
    if (chosenAnswer.toLowerCase() === this.correctAnswer.toLowerCase()) {
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
        `INCORRECT, The correct answer was: ${this.correctAnswer}`
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
      this.choosePicture();
      ui.displayScore();
      ui.emptyMessage();
      ui.removeQuestionandAnswer();
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

    return this.randNum;
  }

  removeQuestions() {
    this.questions.splice(this.randNum, 1);
  }

  choosePicture() {
    let winningPic = '';
    let winningName = '';
    if (this.numCorrect === 1 || this.numCorrect === 2) {
      winningPic =
        'https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/uiflbbpk32loes2lfgbs/the-office-theory-is-toby-flenderson-the-scranton-strangler.jpg';
      winningName = 'Toby';
    } else if (this.numCorrect === 3 || this.numCorrect === 4) {
      winningPic =
        'https://4.bp.blogspot.com/-0pUuDCaGFqw/WNr2dD4_ryI/AAAAAAAAOzc/wrCa1NW-Kmc5ShxNd9018GJkKxOk9GNBgCLcB/s1600/635942906755810120-2056818024_635838641005536031744994076_stanley%2Bin%2Bhat.jpg';
      winningName = 'Stanley';
    } else if (this.numCorrect === 5 || this.numCorrect === 6) {
      winningPic =
        'https://ih0.redbubble.net/image.119424016.1263/flat,800x800,075,f.u2.jpg';
      winningName = 'Dwight';
    } else if (this.numCorrect === 7 || this.numCorrect === 8) {
      winningPic =
        'https://img.buzzfeed.com/buzzfeed-static/static/2016-04/23/10/campaign_images/webdr02/what-percent-compatible-with-jim-halpert-from-the-2-24963-1461422235-11_dblbig.jpg';
      winningName = 'Jim';
    } else if (this.numCorrect === 9 || this.numCorrect === 10) {
      winningPic =
        'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/02/18/10/the-office.jpg';
      winningName = 'Michael';
    }
    console.log('WinningPic', winningPic);
    ui.showWinningPic(winningPic, winningName);
  }
}
