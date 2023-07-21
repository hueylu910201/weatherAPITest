import image from "../../images/rain.svg"

export default function Rain() {
    return (
        <div style={{ display: 'flex' ,marginTop:'2.5rem'}}>
            <img src={image} alt="airflow" style={{ width: '3rem' }} />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a style={{ fontSize: '1.5rem',marginLeft:'1rem' }}>50 %</a>
            </div>
        </div>
    );
}