import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.infoContainer}>
                <img src="/github.png" className={styles.infoTextIcon} />
                <a className={styles.link} href="https://github.com/lkai1" target="_blank" rel="noopener noreferrer">
                    github.com/lkai1
                </a>
            </div>
            <div className={styles.infoContainer}>
                <img src="/phone.png" className={styles.infoTextIcon} />
                <p className={styles.infoText}>Lost sim card on vacation. Update soon.</p>
            </div>
            <div className={styles.infoContainer}>
                <img src="/email.png" className={styles.infoTextIcon} />
                <p className={styles.infoText}>kai-le@outlook.com</p>
            </div>
        </div>
    )
}

export default Footer