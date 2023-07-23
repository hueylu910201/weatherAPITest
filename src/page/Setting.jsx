import { Button } from "antd";
import { useRef, useState } from "react";
import { availableLocations } from "../utils/helpers";

export default function Setting({ changePage, changeCity }) {
    const inputLocationRef = useRef(null);
    const [locationName, setLocationName] = useState("宜蘭縣");
    const handleChange = (e) => {
        setLocationName(e.target.value);
    };
    const saveLocation = () => {
        console.log(`儲存的地區資訊為：${locationName}`);
        changeCity(locationName);
        changePage('WeatherInformation');
        localStorage.setItem('cityName',locationName);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'start' }}>設定</h1>
            <h3 style={{ textAlign: 'start' }}>地區</h3>

            <select id="location" name="location" ref={inputLocationRef} onChange={handleChange}  selected={location.cityName === locationName}
                style={{ width: '100%', padding: '0.5rem', height: '2rem' }}>
                {availableLocations.map((location) => (
                    <option value={location.cityName} key={location.cityName} style={{ fontSize: '1rem' }}>
                        {location.cityName}
                    </option>
                ))}
            </select>
            <div
                id="location"
                style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}
            >
                <Button onClick={() => changePage('WeatherInformation')}>返回</Button>
                <Button type="primary" onClick={saveLocation}>儲存</Button>
            </div>
        </div>
    );
}