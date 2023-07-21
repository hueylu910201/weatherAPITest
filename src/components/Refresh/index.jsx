import image from "../../images/refresh.svg"

export default function Refresh(){
    return(
        <div style={{ display: 'flex'}}>
            <p>最後更新時間: 08:07</p>
            <img src={image} alt="refresh" style={{width:'1.2rem',marginLeft:'1rem'}}/>
        </div>
    );
}