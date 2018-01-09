class UI {
  constructor() {
    this.giphsDiv = document.getElementById('giphs');
  }

  showdata(data) {
    let output = '';

    data.forEach(giph => {
      output += `
      <img src='${giph.images.original.url}'>
      `;
    });
    this.giphsDiv.innerHTML = output;
  }
}
