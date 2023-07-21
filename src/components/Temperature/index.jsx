export default function Temperature({temperature}){
    return(
        <div>
            <div style={{fontSize:'10rem'}}>{Math.round(temperature)} <a style={{fontSize:'5rem'}}>°C</a></div>
        </div>
    );
}