import image from "../../images/refresh.svg"
import dayjs from "dayjs";

const AUTHORIZATION_KEY = 'CWB-40EFFA73-D689-432D-8A8F-5D83629F0C1F';
const LOCATION_NAME = '臺北';

export default function Refresh({ observationTime }) {


    return (
        <div style={{ display: 'flex' }}>
            <img src={image} alt="refresh" style={{ width: '1.2rem', marginLeft: '1rem' }} />
            <p>最後更新時間: {new Intl.DateTimeFormat('zh-TW', {
                hour: 'numeric',
                minute: 'numeric',
            }).format(dayjs(observationTime))}</p>
        </div>
    );
}