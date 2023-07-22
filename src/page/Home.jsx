import Header from "../components/Header"
import Location from "../components/Location/index.jsx"
import Description from "../components/Description"
import Temperature from "../components/Temperature"
import WeatherIcon from "../components/weatherIcon/index.jsx"
import AirFlow from "../components/AirFlow"
import Rain from "../components/Rain"
import Refresh from "../components/Refresh"
import { fetchCurrentWeather, fetchWeatherForecast } from "../components/api"

import { useState, useEffect ,useCallback} from "react"


function Home() {
    const [weatherElement, setWeatherElement] = useState({
        locationName: ' ',
        description: ' ',
        windSpeed: 0,
        temperature: 0,
        rainPossibility: 0,
        observationTime: new Date(),
        comfortability: ' ',
        weatherCode: 0,
        isLoading: true,

    });

    const {
        locationName,
        description,
        windSpeed,
        temperature,
        rainPossibility,
        observationTime,
        comfortability,
        isLoading,
    } = weatherElement
    const fetchData = useCallback(async () => {
        setWeatherElement((prevState) => ({
            ...prevState,
            isLoading: true,
        }))

        const [currentWeather, weatherForecast] = await Promise.all
            ([fetchCurrentWeather(), fetchWeatherForecast()]);

        setWeatherElement({
            ...currentWeather,
            ...weatherForecast,
            isLoading: false,
        });
    },[]); 

    useEffect(() => {
        console.log('execute function in useEffect');
        fetchData();

    }, [fetchData]);

    return (
        <div className="container">
            <div className="content">
                <Header />
                <div style={{ display: 'flex', justifyContent: 'start' }}><Location locationName={locationName} /></div>
                <div style={{ display: 'flex', justifyContent: 'start' }}> <Description description={description} comfortability={comfortability} /></div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'start' }}> <Temperature temperature={temperature} /></div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}> <WeatherIcon /></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'start' }}> <AirFlow windSpeed={windSpeed} /></div>
                <div style={{ display: 'flex', justifyContent: 'start' }}> <Rain rainPossibility={rainPossibility} /></div>

                <div style={{ display: 'flex', justifyContent: 'end' }} onClick={fetchCurrentWeather}>
                    <Refresh observationTime={observationTime} loading={isLoading} />
                </div>
            </div>

        </div>
    )
}

export default Home