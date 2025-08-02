import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.main}>
            <a className={styles.link} href="https://github.com/lkai1" target="_blank" rel="noopener noreferrer">
                github.com/lkai1
            </a>
            <p className={styles.infoText}>+358449559127</p>
            <p className={styles.infoText}>kai-le@outlook.com</p>
        </div>
    )
}

export default Footer