const API_KEY = '27d9eece';

const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
let PAGE = 1;
let finalPage = 1;


function searchMovie() {
    
    const movieName = document.getElementById('search').value;
    if(movieName){
       // console.log(movieName);
        axios.get(BASE_URL+`&s=${movieName}&page=${PAGE}`)
        .then(function (res) {
            console.log(res.data);
            finalPage = Math.ceil(res.data.totalResults / 10);
            console.log(finalPage);
            generateCards(res.data.Search);
        })
    }        
}

function generateCards(resultsData){
    let html = `<ul class="grid-list">`

    resultsData.forEach(el => {
        html = html + `<li class="card_item"><a><div>
        <span class="title">${el.Title}</span>
        <span class="year">${el.Year}</span></div>
        <img src="${el.Poster}"/>
        </a></li>`
    });
    html = html + '</ul>'
    document.getElementById('list').innerHTML = html;
}

function nextPage(event){
    event.preventDefaut();
    PAGE++;    
    gotoPage(PAGE)
}
function gotoPage(page){
    
    PAGE = page;
    searchMovie();
}
function goToEnd(event) {
    event.preventDefaut();
    PAGE = finalPage;
    gotoPage(PAGE)
}

