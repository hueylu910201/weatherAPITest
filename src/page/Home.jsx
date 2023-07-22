import Header from "../components/Header"
import { getMoment } from "../utils/helpers"
import WeatherInformation from "./WeatherInformarion"
import useWeatherAPI from "../components/api"

import { useMemo } from "react"
const LOCATION_NAME_FORECAST = '臺北市';
const AUTHORIZATION_KEY = 'CWB-40EFFA73-D689-432D-8A8F-5D83629F0C1F';
const LOCATION_NAME = '臺北';

function Home() {
    
    const moment = useMemo(() => getMoment(LOCATION_NAME_FORECAST), []);
    const [weatherElement,fetchData]=useWeatherAPI({
        locationName:LOCATION_NAME,
        cityName:LOCATION_NAME_FORECAST,
        authorizationKey:AUTHORIZATION_KEY,
    })

    return (
        <div className="container">
            <div className="content">
                <Header />
                <WeatherInformation
                    weatherElement={weatherElement}
                    moment={moment}
                    fetchData={fetchData}
                />
            </div>

        </div>
    )
}

export default Home