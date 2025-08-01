import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.main}>
            <p className={styles.infoText}>github.com/lkai1</p>
            <p className={styles.infoText}>+358449559127</p>
            <p className={styles.infoText}>kai-le@outlook.com</p>
        </div>
    )
}

export default Footer