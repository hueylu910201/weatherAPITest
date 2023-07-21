import Header from "../components/Header"
import Location from "../components/Location/index.jsx"
import Description from "../components/Description"
import Temperature from "../components/Temperature"
import WeatherIcon from "../components/weatherIcon/index.jsx"
import AirFlow from "../components/AirFlow"
import Rain from "../components/Rain"
import Refresh from "../components/Refresh"

import { useState } from "react"

const AUTHORIZATION_KEY = 'CWB-40EFFA73-D689-432D-8A8F-5D83629F0C1F';
const LOCATION_NAME = '臺北';

function Home() {
    const [currentWeather, setCurrentWeather] = useState({
        locationName: '臺北市',
        description: '多雲時晴',
        windSpeed: 1.0,
        temperature: 35,
        rainPossibility: 70,
        observationTime: '2023-07-21 17:00:00',

    });

    const fetchCurrentWeather = () => {
        fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME} `)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                const locationData = data.records.location[0];

                const weatherElements = locationData.weatherElement.reduce(
                    (neededElements, item) => {
                        if (['WDSD', 'TEMP'].includes(item.elementName)) {
                            neededElements[item.elementName] = item.elementValue;
                        }
                        return neededElements;
                    }, {}
                );
                setCurrentWeather({
                    observationTime: locationData.time.obsTime,
                    locationName: locationData.locationName,
                    temperature: weatherElements.TEMP,
                    windSpeed: weatherElements.WDSD,
                    description: '多雲時晴',
                    rainPossibility: 60,
                });
            });

    };

    return (
        <div className="container">
            <div className="content">
                <Header />
                <div style={{ display: 'flex', justifyContent: 'start' }}><Location locationName={currentWeather.locationName} /></div>
                <div style={{ display: 'flex', justifyContent: 'start' }}> <Description description={currentWeather.description} /></div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'start' }}> <Temperature temperature={currentWeather.temperature} /></div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}> <WeatherIcon /></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'start' }}> <AirFlow windSpeed={currentWeather.windSpeed} /></div>
                <div style={{ display: 'flex', justifyContent: 'start' }}> <Rain rainPossibility={currentWeather.rainPossibility} /></div>
                <div style={{ display: 'flex', justifyContent: 'end' }}  onClick={fetchCurrentWeather}> <Refresh observationTime={currentWeather.observationTime}/></div>
            </div>

        </div>
    )
}

export default Home