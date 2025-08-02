import styles from "./About.module.css"

const About = () => {

    return (
        <div className={styles.main}>
            <img src="/me.jpg" className={styles.meImg} />
            <div className={styles.aboutContainer}>
                <div className={styles.titleContainer}>
                    <p className={styles.aboutTitleName}>Kai Lehtinen</p>
                    <p className={styles.aboutTitle}>FullStack Web kehittäjä</p>
                </div>
                <p className={styles.aboutText}>
                    FullStack web ja -mobiilikehittäjä 6 vuoden yhdistetyllä
                    harrastaja- ja työkokemuksella.
                </p>
            </div>
        </div>
    )
}

export default About