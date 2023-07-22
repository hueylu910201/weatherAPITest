const AUTHORIZATION_KEY = 'CWB-40EFFA73-D689-432D-8A8F-5D83629F0C1F';
const LOCATION_NAME = '臺北';
const LOCATION_NAME_FORECAST = '臺北市';

const fetchCurrentWeather = () => {
    
    return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME} `)
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
            return {
                observationTime: locationData.time.obsTime,
                locationName: locationData.locationName,
                temperature: weatherElements.TEMP,
                windSpeed: weatherElements.WDSD,
                isLoading: false,
            };
        });

};

const fetchWeatherForecast = () => {

    return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}
    `)
        .then((response) => response.json())
        .then((data) => {
            // console.log('data', data);
            const locationData = data.records.location[0];

            const weatherElements = locationData.weatherElement.reduce(
                (neededElements, item) => {
                    if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
                        neededElements[item.elementName] = item.time[0].parameter;
                    }
                    return neededElements;
                }, {}
            );
            return {
                description: weatherElements.Wx.parameterName,
                weatherCode: weatherElements.Wx.parameterValue,
                rainPossibility: weatherElements.PoP.parameterName,
                comfortability: weatherElements.CI.parameterName,
            };
        });

};

export {fetchCurrentWeather,fetchWeatherForecast} ;