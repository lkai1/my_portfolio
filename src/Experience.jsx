import styles from "./Experience.module.css"

const Experience = () => {

    return (
        <div className={styles.main}>
            <div className={styles.experienceContainer}>
                <p className={styles.experienceTitle}>Helsingin avoin yliopisto</p>
                <p className={styles.experienceText}>Tietojenkäsittelytiede. Ilmaiset verkko-opinnot, eli yliopiston
                    sanojen mukaan ensimmäisen vuoden opinnot.
                </p>
            </div>
            <p className={styles.arrowDown}>↓</p>

            <div className={styles.experienceContainer}>
                <p className={styles.experienceTitle}>React Buutcamp</p>
                <p className={styles.experienceText}>FrontEnd Web koulutus</p>
            </div>
            <p className={styles.arrowDown}>↓</p>

            <div className={styles.experienceContainer}>
                <p className={styles.experienceTitle}>Buutti trainee academy</p>
                <p className={styles.experienceText}>FullStack Web koulutus</p>
            </div>
            <p className={styles.arrowDown}>↓</p>

            <div className={styles.experienceContainer}>
                <p className={styles.experienceTitle}>Wiiste oy</p>
                <p className={styles.experienceText}>Junior FullStack Web Developer työharjoittelu</p>
            </div>
            <p className={styles.arrowDown}>↓</p>

            <div className={styles.experienceContainer}>
                <p className={styles.experienceTitle}>DeFination Labs FZCO</p>
                <p className={styles.experienceText}>Fullstack web ja mobiilikehitystä freelancerinä. Työskentelin täysin etänä
                    omissa projekteissa kuin myös tiimiprojekteissa. Suunnittelin ja
                    toteutin web/mobiili käyttöliittymiä joihin tein myös täysin yksin tai osana tiimiä
                    myös backend puolen töitä. Tein myös osan näistä projekteista täysin itsenäisesti,
                    kehitysympäristön valinnasta ja pystyttämisestä asti valmiiksi pilvipalveluissa pyöriviin
                    ja täysin toimiviksi tuotteiksi.
                </p>
            </div>
            <p className={styles.arrowDown}>↓</p>

            <div className={styles.experienceContainer}>
                <p className={styles.experienceTitle}>Hakatemia</p>
                <p className={styles.experienceText}>Eettinen hakkerointi ja yleinen tietoturva</p>
            </div>
        </div>
    )
}

export default Experience