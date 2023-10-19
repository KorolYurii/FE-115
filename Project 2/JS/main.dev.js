"use strict";

$(function () {
  $('.slider').slick({
    dots: true,
    // autoplay: false,
    // autoplaySpeed: 4000,
    // arrows: false,
    vertical: true
  });
  $('.single-item').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    responsive: []
  });
  ;
  $('.news_slider_list').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.arrivals_arrow_left'),
    nextArrow: $('.arrivals_arrow_right'),
    responsive: [{
      breakpoint: 1015,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false
      }
    }, {
      breakpoint: 668,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      }
    }]
  }); // $('.photo').lightGallery({
  //     controls:true,
  //     counter:true,
  //     download: true,
  //     arrows: true,
  //     escKey: true,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  // })
}); //gallery

var gallery = document.getElementById('gallery');
lightGallery(gallery, {
  controls: true,
  counter: true,
  download: true,
  arrows: true,
  escKey: true,
  autoplay: true,
  autoplaySpeed: 1000
});
var customIcon = L.icon({
  iconUrl: './JS/images/marker.png',
  //shadowUrl: 'leaf-shadow.png',
  iconSize: [80, 80],
  // size of the icon
  //shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [22, 94],
  // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

});
var map = L.map('my-map').setView([51.486603466706335, 31.30802117611757], 13);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map); //Hong Kong

L.marker([22.313208922495647, 114.17263361075162], {
  icon: customIcon
}).addTo(map).bindPopup("This is Hong Kong").openPopup(); //New-York

L.marker([40.78159296396248, -73.96915881456673], {
  icon: customIcon
}).addTo(map).bindPopup("This is New-York").openPopup(); //Chernihiv

L.marker([51.486603466706335, 31.30802117611757], {
  icon: customIcon
}).addTo(map).bindPopup("Гармати з бастіонів Чернігівської фортеці — пам'ятка історії місцевого значення в Чернігові, розташована на території Валу. Складається з 12 гармат XVI–XVIII століть.").openPopup(); //scroll

window.addEventListener('scroll', function (e) {
  var header = document.getElementById('headers').classList;
  var active_class = "headers-scrolled";
  if (pageYOffset > 100) header.add(active_class);else header.remove(active_class);
}); //validation

var EMAIL_MIN_LENGHT = 5; // function checkEmailLenght() {
//     const valueLenght = window.inputEmail.value.length;
//     const diff = valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;
//     if(diff) {
//         window.emailDiffCount.textContent = diff;
//         window.emailLenghtHelp.classList.remove('d-none');
//     } else {
//         window.emailLenghtHelp.classList.add('d-none');
//     }
// };
// function resetValidation() {
//     window.emailHelp.classList.add('d-none');
//     window.nameHelp.classList.add('d-none');
// }

function validateForm(event) {
  event.preventDefault();
  resetValidation();
  var email = window.inputEmail.value;
  var name = window.inputName.value;

  if (!email) {
    window.emailHelp.classList.remove('d-none');
    return false;
  }

  if (!name) {
    window.nameHelp.classList.remove('d-none');
    return false;
  }

  console.log(email, password);
}

function formSubmit(event) {
  var email, name, apiToken, chatId, text, urlString, request;
  return regeneratorRuntime.async(function formSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          email = window.inputEmail.value;
          name = window.inputName.value;

          if (!(!email || !name)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", false);

        case 5:
          apiToken = "6216822090:AAFNNl1KOsugV5ADdSeRsGRDuFMlekDM1Qw";
          chatId = "-1001845558174";
          text = "\n        Email: ".concat(email, "    \n        Name: ").concat(name, "\n        ");
          urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage?chat_id=").concat(chatId, "&text=").concat(text);
          request = new XMLHttpRequest();
          request.open("GET", urlString);
          request.send(); // let response = request.response;
          // const response = await fetch(urlString, {
          //     method: 'post',
          //     headers: {
          //         'Accept': 'application/json',
          //         'Content-Type': 'application/json'
          //     },
          //     body: JSON.stringify({
          //         chat_id: chatId,
          //         text,
          //         parse_mode: 'HTML'
          //     })
          // });
          // const resp = await response.json();
          // console.log(resp);
          // let request = new XMLHttpRequest();
          // request.open("GET", urlString);
          // request.send();
          //let response = request.response;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.loginForm.addEventListener('submit', formSubmit);

function toggleMenu(e) {
  // e.preventDefault();
  // e.target.classList.toggle('active');
  document.querySelector('.headers').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.page_wrapper').classList.toggle('menu_open'); // document.querySelector('.burger').classList.toggle('mobile');
}