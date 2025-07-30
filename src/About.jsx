import styles from "./About.module.css"

const About = () => {

    return (
        <div className={styles.main}>
            <img src="/me.jpg" className={styles.meImg} />
            <div className={styles.aboutContainer}>
                <p className={styles.aboutTitle}>Kai Lehtinen | FullStack Web kehittäjä</p>
                <p className={styles.aboutText}>
                    FullStack Web ja mobiili kehittäjä 6 vuoden yhdistetyllä
                    harrastaja- ja työkokemuksella
                </p>
            </div>
        </div>
    )
}

export default About