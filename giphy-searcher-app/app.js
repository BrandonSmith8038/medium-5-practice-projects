const ui = new UI();
const giphy = new Giphy();
//const keys = new Key();

function main() {
  giphy.getData().then(res => {
    console.log('From App.js', res);
    ui.showdata(res.data);
  });
}

main();
