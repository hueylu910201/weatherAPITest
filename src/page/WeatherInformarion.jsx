import Location from "../components/Location";
import Description from "../components/Description";
import Temperature from "../components/Temperature";
import WeatherIcon from "../components/weatherIcon";
import AirFlow from "../components/AirFlow";
import Rain from "../components/Rain"
import Refresh from "../components/Refresh"



export default function WeatherInformation({ weatherElement , moment , fetchData }) {

    const{
        locationName, 
        description,
        windSpeed,
        temperature,
        rainPossibility,
        observationTime,
        comfortability,
        weatherCode,
        isLoading}=weatherElement;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
            <Location locationName={locationName} />
            <Description description={description} comfortability={comfortability} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'start' }}> <Temperature temperature={temperature} /></div>
                <div style={{ display: 'flex', justifyContent: 'start' }}> <WeatherIcon weatherCode={weatherCode} moment={moment} /></div>
            </div>

            <AirFlow windSpeed={windSpeed} />
            <Rain rainPossibility={rainPossibility} />

            <div style={{ display: 'flex', justifyContent: 'end' }} onClick={fetchData}>
                <Refresh observationTime={observationTime} loading={isLoading} />
            </div>
        </div>
    );
}