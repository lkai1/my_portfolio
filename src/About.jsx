import styles from "./About.module.css"

const About = () => {

    return (
        <div className={styles.main}>
            <img src="/me.png" className={styles.meImg} />
            <div className={styles.aboutContainer}>
                <div className={styles.titleContainer}>
                    <p className={styles.aboutTitleName}>Kai Lehtinen</p>
                    <p className={styles.aboutTitle}>FullStack kehittäjä</p>
                </div>
                <p className={styles.aboutText}>
                    Olen Kai Lehtinen ja haen FullStack-kehittäjän työtehtävää.
                    Minulla on noin kuuden vuoden yhdistetty kokemus web- ja mobiilikehityksestä,
                    joka on muodostunut harrastuneisuudesta, useista koulutuksista,
                    työharjoittelusta sekä freelance-projekteista.
                </p>
            </div>
        </div>
    )
}

export default About