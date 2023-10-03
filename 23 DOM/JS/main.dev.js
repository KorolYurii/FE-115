"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

function createPlayList() {
  var songForLife = document.querySelector('div');
  var htmlToInsert = '<ol>';

  for (var i = 0; i < playList.length; i++) {
    htmlToInsert += "<li class=\"play_list_item\"><div>Music name: ".concat(playList[i].song, "</div><br><div>Author: ").concat(playList[i].author, "</div><br><br></li>");
  }

  htmlToInsert += '</ol>';
  songForLife.innerHTML = htmlToInsert;
}

function toggleMenu() {
  document.querySelector('.modal_full').classList.toggle('open');
  document.querySelector('.modal_win').classList.toggle('open-win');
}

var lights = document.querySelectorAll('.light');
var currLight = 2;

function color() {
  for (var i = 0; i < lights.length; i++) {
    lights[i].classList.remove('active');
  }

  currLight = (currLight + 1) % lights.length;
  lights[currLight].classList.add('active');
}