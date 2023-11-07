"use strict";

var API_KEY = 'af4b1ca7e93f744d85867d9d2419981f';
var BASE_URL = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=".concat(API_KEY); //`https://api.musixmatch.com/ws/1.1/track.get?apikey=${API_KEY}`;

var PAGE = 1;
var finalPage = 1; // http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc

function searchMusic() {
  var musicName = document.getElementById('search').value;

  if (musicName) {
    //console.log(musicName);
    axios.get(BASE_URL + "&q=".concat(musicName)).then(function (res) {
      console.log(res.data);
      finalPage = Math.ceil(res.data.totalResults / 10);
      console.log(finalPage);
      generateCards(res.data.Search);
    });
  }
}

function nextPage(event) {
  event.preventDefault();
  PAGE++;
  gotoPage(PAGE);
}

function gotoPage(page) {
  PAGE = page;
  searchMovie();
}

function goToEnd(event) {
  event.preventDefault();
  PAGE = finalPage;
  gotoPage(PAGE);
}

function prevPage(event) {
  event.preventDefault();
  PAGE--;
  gotoPage(PAGE);
}

function goToStart(event) {
  event.preventDefault();
  PAGE = 1;
  gotoPage(PAGE);
}