import Header from "../components/Header"
import { getMoment, findLocation } from "../utils/helpers"
import WeatherInformation from "./WeatherInformarion"
import useWeatherAPI from "../components/api"
import Setting from "./Setting"

import { useMemo, useState } from "react"
const LOCATION_NAME_FORECAST = '臺北市';
const AUTHORIZATION_KEY = 'CWB-40EFFA73-D689-432D-8A8F-5D83629F0C1F';
const LOCATION_NAME = '臺北';

function Home() {

    const [currentPage, setCurrentPage] = useState('WeatherInformation')
    const changePage = (currentPage) => {
        setCurrentPage(currentPage);
    };
    const [currentCity, setCurrentCity] = useState(()=>localStorage.getItem('cityName') || '臺北市');
    const changeCity = (currentCity) => {
        setCurrentCity(currentCity);
    };

    const currentLocation = useMemo(() => findLocation(currentCity), [currentCity]);
    const { cityName, locationName, sunriseCityName } = currentLocation;

    const moment = useMemo(() => getMoment(sunriseCityName), [sunriseCityName]);

    const [weatherElement, fetchData] = useWeatherAPI({
        locationName,
        cityName,
        authorizationKey: AUTHORIZATION_KEY,
    })



    return (
        <div className="container">
            <div className="content">
                <Header />
                {currentPage === 'WeatherInformation' && (
                    <WeatherInformation
                        weatherElement={weatherElement}
                        moment={moment}
                        cityName={cityName}
                        fetchData={fetchData}
                        changePage={changePage}
                    />

                )}

                {currentPage === 'Setting' && (
                    <Setting
                        changeCity={changeCity}
                        changePage={changePage}
                    />
                )}
            </div>
        </div>
    )
}

export default Home