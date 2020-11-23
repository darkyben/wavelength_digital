class WordsAPI {
  
  constructor() {
    this.KEY = "";
  }
  
  async getPair() {
    let result = await fetch("https://wordsapiv1.p.rapidapi.com/words/?hasDetails=antonyms&random=true", {
      headers: {
        "X-Mashape-Key": this.KEY,
        "Host": "wordsapiv1.p.rapidapi.com"
      }
    });
    let body = await result.json();
    
    return {
      positive: body.word,
      negative: this._findAntonym(body.results)
    };
  }
  
  _findAntonym(results) {
    for (let word of results) {
      if (word.hasOwnProperty("antonyms")) {
        return random(word.antonyms);
      }
    }
  }
  
}