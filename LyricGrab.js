const axios = require("axios");
const cheerio = require("cheerio");
const readline = require("readline");

const url = "https://genius.com/Gorillaz-november-has-come-lyrics";

function getLyric(url) {
  axios.default
    .get(url)
    .then((res) => {
      // console.log(res.data);
      const $ = cheerio.load(res.data);
      //const src = $("br")[4].nextSibling.data;
      //const src = $("br");
      var src = [];
      for (let i = 0; i < 20; i++) {
        src.push($("br")[i].nextSibling.data);
        console.log(src[i]);
      }
    })
    .catch(() => console.log("error"));
}

getLyric(url);
