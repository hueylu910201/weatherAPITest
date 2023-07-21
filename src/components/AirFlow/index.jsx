import image from "../../images/airFlow.svg"

export default function AirFlow({windSpeed}) {
    return (
        <div style={{ display: 'flex' }}>
            <img src={image} alt="airflow" style={{ width: '3rem' }} />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a style={{ fontSize: '1.5rem',marginLeft:'1rem' }}>{windSpeed} m/h</a>
            </div>
        </div>
    );
}