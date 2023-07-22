import DayClear from "../../images/day-clear.svg"
import DayCloudy from "../../images/day-cloudy.svg"
import DayCloudyFog from "../../images/day-cloudy-fog.svg"
import DayFog from "../../images/day-fog.svg"
import DayClearRain from "../../images/day-partially-clear-with-rain.svg"
import DaySnow from "../../images/day-snowing.svg"
import DayThunder from "../../images/day-thunderstorm.svg"
import NightClear from "../../images/night-clear.svg"
import NightCloudyFog from "../../images/night-cloudy-fog.svg"
import NightCloudy from "../../images/night-cloudy.svg"
import NightFog from "../../images/night-fog.svg"
import NightClearRain from "../../images/night-partially-clear-with-rain.svg"
import NightSnow from "../../images/night-snowing.svg"
import NightThunder from "../../images/night-thunderstorm.svg"

import { useMemo } from "react"

const weatherTypes = {
    isThunderstorm: [15, 16, 17, 18, 21, 22, 23, 33, 34, 35, 36, 41],
    isClear: [1],
    isCloudyFog: [25, 26, 27, 28],
    isCloudy: [2, 3, 4, 5, 6, 7],
    isFog: [24],
    isParticallyClearWithRain: [8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
    isSnowing: [23, 37, 42],

};
const weatherIcons = {
    day: {
        isThunderstorm: DayThunder,
        isClear: DayClear,
        isCloudyFog: DayCloudyFog,
        isCloudy: DayCloudy,
        isFog: DayFog,
        isParticallyClearWithRain: DayClearRain,
        isSnowing: DaySnow,
      },
      night: {
        isThunderstorm: NightThunder,
        isClear: NightClear,
        isCloudyFog: NightCloudyFog,
        isCloudy: NightCloudy,
        isFog: NightFog,
        isParticallyClearWithRain: NightClearRain,
        isSnowing: NightSnow,
      },

};
const weatherCodeToType = (weatherCode) => {
    const [weatherType] =
        Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
            weatherCodes.includes(Number(weatherCode))
    ) || [];
    return weatherType;

}

export default function WeatherIcon({ weatherCode, moment }) {

    const weatherType = useMemo(()=>weatherCodeToType(weatherCode),[weatherCode]) ;
    const weatherIcon = weatherIcons[moment][weatherType];

    return (
        <div>
            <img src={weatherIcon} alt={weatherCode} style={{ width: '13rem' }} />
        </div>
    );
}