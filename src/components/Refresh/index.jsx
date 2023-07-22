import refreshImage from "../../images/refresh.svg"
import loadingImage from "../../images/loading.svg"
import dayjs from "dayjs";
import styles from "../Refresh/refresh.module.css"

export default function Refresh({ observationTime, loading }) {
    const img = {
        name: loading ? 'loadingImage' : 'refreshImage',
    };

    return (
        <div style={{ display: 'flex' }}>

            <img src={img.name === 'loadingImage' ? loadingImage : refreshImage} alt="refresh"
                className={img.name === 'loadingImage' ?styles.loadingImage:styles.refreshImage}
            />
            
            <p>最後更新時間: {new Intl.DateTimeFormat('zh-TW', {
                hour: 'numeric',
                minute: 'numeric',
            }).format(dayjs(observationTime))}</p>
        </div>
    );
}