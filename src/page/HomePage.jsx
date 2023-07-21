import Header from "../components/Header"
import Location from "../components/Location/index.jsx"
import Description from "../components/Description"
import Temperature from "../components/Temperature"
import WeatherIcon from "../components/weatherIcon/index.jsx"
import AirFlow from "../components/AirFlow"
import Rain from "../components/Rain"
import Refresh from "../components/Refresh"

function Home() {

    return (
        <div className="container">
            <div className="content">
                <Header />
                <a style={{ display: 'flex', justifyContent: 'start' }}><Location /></a>
                <a style={{ display: 'flex', justifyContent: 'start' }}> <Description /></a>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a style={{ display: 'flex', justifyContent: 'start' }}> <Temperature /></a>
                    <a style={{ display: 'flex', justifyContent: 'start' }}> <WeatherIcon /></a>
                </div>

                <a style={{ display: 'flex', justifyContent: 'start' }}> <AirFlow /></a>
                <a style={{ display: 'flex', justifyContent: 'start' }}> <Rain /></a>
                <a style={{ display: 'flex', justifyContent: 'end' }}> <Refresh /></a>
            </div>

        </div>
    )
}

export default Home