"use strict";

var API_KEY = '27d9eece';
var BASE_URL = "https://www.omdbapi.com/?apikey=".concat(API_KEY);
var PAGE = 1;
var finalPage = 1;

function searchMovie() {
  var movieName = document.getElementById('search').value;

  if (movieName) {
    // console.log(movieName);
    axios.get(BASE_URL + "&s=".concat(movieName, "&page=").concat(PAGE)).then(function (res) {
      console.log(res.data);
      finalPage = Math.ceil(res.data.totalResults / 10);
      console.log(finalPage);
      generateCards(res.data.Search);
    });
  }
}

function generateCards(resultsData) {
  var html = "<ul class=\"grid-list\">";
  resultsData.forEach(function (el) {
    html = html + "<li class=\"card_item\"><a><div>\n        <span class=\"title\">".concat(el.Title, "</span>\n        <span class=\"year\">").concat(el.Year, "</span></div>\n        <img src=\"").concat(el.Poster, "\"/>\n        </a></li>");
  });
  html = html + '</ul>';
  document.getElementById('list').innerHTML = html;
}

function nextPage(event) {
  event.preventDefaut();
  PAGE++;
  gotoPage(PAGE);
}

function gotoPage(page) {
  PAGE = page;
  searchMovie();
}

function goToEnd(event) {
  event.preventDefaut();
  PAGE = finalPage;
  gotoPage(PAGE);
}