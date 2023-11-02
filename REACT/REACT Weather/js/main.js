// const options = {
//     method: 'GET'
// }
function App(props) {
    return (
        <section className="section">
            <div className="container">
                <HeaderSection/>
                <div className='grid'>
                    <GridItem/>
                </div>
                
                <TextSection/>
            </div>
        </section>
    )
}



function HeaderSection(props) {
    return (
        <h1 className="header">CSS Weather Forecast
            <i className="wi wi-sunset"></i>
        </h1>
    )
}



function GridSection(props) {
    return (
        <div>
            <div className="lisbon w-50">Lisbon  <br />
                <span>21°C </span>
                <i className="wi wi-day-sunny"></i>
            </div>
            <div className="paris w-25">Paris <br />
                <span>11°C </span>
                <i className="wi wi-night-sleet"></i>
            </div>
            <div className="belgrade w-25">Belgrade <br />
                <span>15°C </span>
                <i className="wi wi-day-cloudy"></i>
            </div>

            <div className="venice w-25">Venice <br />
                <span>21°C </span>
                <i className="wi wi-day-cloudy-high"></i>
            </div>
            <div className="tel-avive w-25">Tel-Avive <br />
                <span>32°C </span>
                <i className="wi wi-hot"></i>
            </div>
            <div className="cair w-25">Cair <br />
                <span>21°C </span>
                <i className="wi wi-day-sunny"></i>
            </div>
            <div className="new-york w-25">New-York <br />
                <span>17°C </span>                    
                <i className="wi wi-day-sleet-storm"></i>
            </div>

            <div className="new-delhi w-25">New-Delhi <br />
                <span>17°C </span>
                <i className="wi wi-rain-wind"></i>
            </div>
            <div className="san-francisco w-50"> San-Francisco <br />
                <span>15°C </span>
                <i className="wi wi-day-cloudy"></i>
            </div>
            <div className="tokyo w-25">Tokyo <br />
                <span>8°C </span>
                <i className="wi wi-night-clear"></i>
            </div>
            <div className="sydney w-100">Sydney <br />
                <span>25°C </span>
                <i className="wi wi-night-partly-cloudy"></i>
            </div>
        </div>
    )
}
function TextSection(props) {
    return (
        <p className="text">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
    )
}


function GridItem(props) {
    let weatherItem;
    if(weatherList.length) {
        weatherItem = weatherList.map((card, city) => {
            return <GridItem item={card} key={city}/>
        })
    }
    
    console.log(weatherItem);

    return (
        <div className="grid">Sydney <br />
            {weatherItem}
        </div>
    )
}

const weatherList = [
    {
        city: 'Lisbon',
        temp: '21',
        icon: 'icon-sun',
        width: 50
    },
    {
        city: 'Paris',
        temp: '11',
        icon: 'icon-sun',
        width: 25
    },
    {
        city: 'Belgrade',
        temp: '15',
        icon: 'icon-sun',
        width: 50
    },
    {
        city: 'Venice',
        temp: '21',
        icon: 'icon-sun',
        width: 25
    },
    {
        city: 'Tel-Avive',
        temp: '32',
        icon: 'icon-sun',
        width: 25
    },
    {
        city: 'Cair',
        temp: '21',
        icon: 'icon-sun',
        width: 25
    },
    {
        city: 'New-York',
        temp: '17',
        icon: 'icon-sun',
        width: 25
    },
    {
        city: 'New-Delhi',
        temp: '17',
        icon: 'icon-sun',
        width: 25
    },
    {
        city: 'San-Francisco',
        temp: '15',
        icon: 'icon-sun',
        width: 50
    },
    {
        city: 'Tokyo',
        temp: '8',
        icon: 'icon-sun',
        width: 25
    },
    {
        city: 'Sydney',
        temp: '25',
        icon: 'icon-sun',
        width: 100
    }

]


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))