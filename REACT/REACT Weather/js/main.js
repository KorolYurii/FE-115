function App() {
    return (
        <section className="section">
            <div className="container">
                <HeaderSection/>
                <GridItem/>                
                <TextSection/>
            </div>
        </section>
    )
}

function HeaderSection() {
    return (
        <h1 className="header">CSS Weather Forecast
            <i className="wi wi-sunset"></i>
        </h1>
    )
}

function TextSection() {
    return (
        <p className="text">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
    )
}

function GridItem() {
    let weatherItem;
    if(weatherList.length) {
        weatherItem = weatherList.map((card, city) => {
            return <GridWeatherItem item={card}  key={city}/>
        })
    }
    
    return (
        <div className="grid">
            {weatherItem}
        </div>
    )
}

function GridWeatherItem(props) {
    const { city, temp, icon, width, color } = props.item;
    const classIcon = `wi ${icon}`;

    return (
        <div className={width} style={{backgroundColor: color}}>
            <p>{city}</p>
            <span>{temp}°C; </span>
            <i className={classIcon}></i>        
      </div> 
    )
    
}

const weatherList = [
    {
        city: 'Lisbon',
        temp: '21',
        icon: 'wi wi-day-sunny',
        width: 'w-50',
        color: '#38b4e9'
    },
    {
        city: 'Paris',
        temp: '11',
        icon: 'wi-night-sleet',
        width: 'w-25',
        color: '#3CC'
    },
    {
        city: 'Belgrade',
        temp: '15',
        icon: 'wi-day-cloudy',
        width: 'w-25',
        color: '#969'
    },
    {
        city: 'Venice',
        temp: '21',
        icon: 'wi-day-cloudy-high',
        width: 'w-25',
        color: '#C24747'
    },
    {
        city: 'Tel-Avive',
        temp: '32',
        icon: 'wi-hot',
        width: 'w-25',
        color: '#E2674A'
    },
    {
        city: 'Cair',
        temp: '21',
        icon: 'wi-day-sunny',
        width: 'w-25',
        color: '#FC6'
    },
    {
        city: 'New-York',
        temp: '17',
        icon: 'wi-day-sleet-storm',
        width: 'w-25',
        color: '#9C9'
    },
    {
        city: 'New-Delhi',
        temp: '17',
        icon: 'wi-rain-wind',
        width: 'w-25',
        color: '#699'
    },
    {
        city: 'San-Francisco',
        temp: '15',
        icon: 'wi-day-cloudy',
        width: 'w-50',
        color: '#C69'
    },
    {
        city: 'Tokyo',
        temp: '8',
        icon: 'wi-night-clear',
        width: 'w-25',
        color: '#396'
    },
    {
        city: 'Sydney',
        temp: '25',
        icon: 'wi-night-partly-cloudy',
        width: 'w-100',
        color: '#669'
    }

]


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))




