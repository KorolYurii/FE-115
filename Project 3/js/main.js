const API_KEY = '4c353af824d786d3afe3b55e6a4178eb';
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`


function searchCity() {
    
    const cityName = document.getElementById('search').value;
    if(cityName){
       //console.log(cityName);
        axios.get(BASE_URL+`&q=${cityName}`)
        .then(function (res) {
            console.log(res.data);
            
            generateCards(res.data);
            
        })
    }  
         
}


function generateCards(resultsData){

    let html = `<ul class="grid-list">`
    
    resultsData.forEach(el => {
        html = html + `<li class="card_item">
        <span>${el.weather.icon}</span>
        <span>${el.main.feels_like}</span>                
        </li>`
    });
    html = html + '</ul>'
    document.getElementById('content').innerHTML = html;
    
}

