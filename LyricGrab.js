const axios = require("axios");
const cheerio = require("cheerio");
const readline = require("readline");

const url = "https://genius.com/Gorillaz-november-has-come-lyrics";

function getLyric(url) {
  var src = [];
  axios.default
    .get(url)
    .then((res) => {
      // console.log(res.data);
      const $ = cheerio.load(res.data);
      //const src = $("br")[4].nextSibling.data;
      //const src = $("br");
      const size = $("br").length;

      const second = $("a").attr("href");
      for (let i = 0; i < size - 1; i++) {
        src.push($("br")[i].nextSibling.data);
        console.log(src[i]);
      }
      //console.log(second);
      //return src;
    })
    .catch(() => console.log("error"));
  //return src;
}

getLyric(url);
