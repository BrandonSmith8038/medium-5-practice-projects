class UI {
  constructor() {
    this.giphsDiv = document.getElementById('giphs');
    this.searchInput = document.getElementById('search');
    this.searchBtn = document.getElementById('submitBtn');
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
