import DayClear from "../../images/day-clear.svg"
import DayCloudy from "../../images/day-cloudy.svg"
import DayFog from "../../images/day-fog.svg"
import DayClearRain from "../../images/day-partially-clear-with-rain.svg"
import DaySnow from "../../images/day-snowing.svg"
import DayThunder from "../../images/day-thunderstorm.svg"
import NightClear from "../../images/night-clear.svg"
import NightCloudy from "../../images/night-cloudy.svg"
import NightFog from "../../images/night-fog.svg"
import NightClearRain from "../../images/night-partially-clear-with-rain.svg"
import NightSnow from "../../images/night-snowing.svg"
import NightThunder from "../../images/night-thunderstorm.svg"
export default function WeatherIcon() {
    return (
        <div>
            <img src={DayClear} alt="Weather Icon" style={{width:'13rem'}}/>
        </div>
    );
}