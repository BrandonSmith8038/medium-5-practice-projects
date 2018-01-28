class Giphy {
  constructor() {
    this.url = 'http://api.giphy.com/v1/gifs/search';
    this.fullUrl = '';
    this.key = key.apiKey;
    //Will Eventually Get this from the input box and the ui class
    this.searchTerm = 'Rodefdafsfo';
    this.limit = 10;
    this.apiResponse = '';
  }

  createUrl() {
    this.fullUrl = `${this.url}?q=${this.searchTerm}&limit=${
      this.limit
    }&api_key=${this.key}`;
  }

  async getData() {
    this.createUrl();
    const response = await fetch(this.fullUrl);

    this.apiResponse = await response.json();

    return this.apiResponse;
  }
}
