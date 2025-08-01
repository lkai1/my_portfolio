import styles from "./Experience.module.css"
import ArrowDown from '../assets/arrow_down.svg?react';
import School from "../assets/school_icon.svg?react"
import Work from "../assets/work_icon.svg?react"

const Experience = () => {

    return (
        <div className={styles.main}>
            <p className={styles.sectionTitle}>Koulutukset & Työkokemus</p>

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <School className={styles.experienceTitleIcon} />
                    <p className={styles.experienceTitle}>Helsingin avoin yliopisto</p>
                </div>
                <p className={styles.experienceText}>Tietojenkäsittelytiede. Ilmaiset verkko-opinnot, eli yliopiston
                    sanojen mukaan ensimmäisen vuoden opinnot.
                </p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <School className={styles.experienceTitleIcon} />
                    <p className={styles.experienceTitle}>React Buutcamp</p>
                </div>
                <p className={styles.experienceText}>FrontEnd Web koulutus</p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <School className={styles.experienceTitleIcon} />
                    <p className={styles.experienceTitle}>Buutti trainee academy</p>
                </div>
                <p className={styles.experienceText}>FullStack Web koulutus</p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <Work className={styles.experienceTitleIcon} />
                    <p className={styles.experienceTitle}>Wiiste oy</p>
                </div>
                <p className={styles.experienceText}>Junior FullStack Web Developer työharjoittelu</p>
            </div>

            <ArrowDown className={styles.arrowDown} />
            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <Work className={styles.experienceTitleIcon} />
                    <p className={styles.experienceTitle}>DeFination Labs FZCO</p>
                </div>
                <p className={styles.experienceText}>Fullstack web ja mobiilikehitystä freelancerinä. Työskentelin täysin etänä
                    omissa projekteissa kuin myös tiimiprojekteissa. Suunnittelin ja
                    toteutin web/mobiili käyttöliittymiä joihin tein myös täysin yksin tai osana tiimiä
                    myös backend puolen töitä. Tein myös osan näistä projekteista täysin itsenäisesti,
                    kehitysympäristön valinnasta ja pystyttämisestä asti valmiiksi pilvipalveluissa pyöriviin
                    ja täysin toimiviksi tuotteiksi.
                </p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <School className={styles.experienceTitleIcon} />
                    <p className={styles.experienceTitle}>Hakatemia</p>
                </div>
                <p className={styles.experienceText}>Eettinen hakkerointi ja yleinen tietoturva</p>
            </div>
        </div>
    )
}

export default Experience