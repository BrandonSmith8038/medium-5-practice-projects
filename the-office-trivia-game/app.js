//Init UI Class
const ui = new UI();

//Init Game Class
const game = new Game();

function gameStart() {
  game.getQuestions().then(questions => {
    game.askQuestion();
    ui.chooseAnswer();
    ui.nextButtonClick();
  });
}

gameStart();
