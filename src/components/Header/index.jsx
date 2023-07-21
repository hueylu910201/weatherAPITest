import styles from "./header.module.css";

export default function Header(){
    return(
        <div className={styles.header}>
            <a>臺灣好天氣APP</a>
        </div>
    );
}