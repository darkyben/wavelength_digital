class Words {
  
  constructor() {
    this.API = new WordsAPI();
  }
  
  getPair() {
    return this.API.getPair();
  }
  
}