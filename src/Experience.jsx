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
                    <p className={styles.experienceTitle}>Helsingin avoin yliopisto (8 kk)</p>
                    <School className={styles.experienceTitleIcon} />
                </div>
                <p className={styles.experienceText}>Suoritin verkossa tietojenkäsittelytieteen opintoja,
                    jotka vastaavat yliopiston ensimmäisen vuoden sisältöä.
                    Opinnoissa käytiin läpi muun muassa ohjelmoinnin perusteita,
                    algoritmeja ja tietorakenteita sekä tietojenkäsittelyn keskeisiä käsitteitä ja ongelmanratkaisua.
                    Opinnot toteutettiin omaan tahtiin verkkokurssina,
                    ja ne antoivat hyvän pohjan ymmärtää, miten ohjelmistot toimivat ja miten niitä rakennetaan.
                </p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <p className={styles.experienceTitle}>React Buutcamp (2.5 kk)</p>
                    <School className={styles.experienceTitleIcon} />
                </div>
                <p className={styles.experienceText}>Kurssilla tutustuttiin HTML:n, CSS:n, JavaScriptin ja Reactin alkeisiin,
                    ja painopiste oli erityisesti peruskäsitteiden ja työkalujen ymmärtämisessä.
                    Opin, miten verkkosivujen rakenne, ulkoasu ja perustoiminnallisuus syntyvät,
                    ja sain hyvän pohjan jatkaa opiskelua ja kehittää osaamista syvemmälle käytännön kautta.
                </p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <p className={styles.experienceTitle}>Buutti trainee academy (3.5 kk)</p>
                    <School className={styles.experienceTitleIcon} />
                </div>
                <p className={styles.experienceText}>FullStack-webkehitykseen keskittyvä koulutus,
                    jossa käytiin läpi verkkosovellusten kehittämistä alusta loppuun.
                    Kurssilla tutustuttiin muun muassa JavaScriptiin,
                    TypeScriptiin, CSS:ään, SQL:ään, PostgreSQL:ään ja MongoDB:hen.
                    Opintoihin sisältyi myös käyttäjien rekisteröinnin ja kirjautumisen toteuttaminen JWT-tunnisteilla,
                    sekä testauksen ja Material UI -komponenttikirjaston käyttö.
                    Koulutus painottui käytännön harjoituksiin ja tiimityöhön,
                    ja tarjosi hyvän kokonaiskuvan siitä, miten moderneja fullstack-sovelluksia rakennetaan sekä front- että backendin näkökulmasta.
                </p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <p className={styles.experienceTitle}>Wiiste oy (6 kk)</p>
                    <Work className={styles.experienceTitleIcon} />
                </div>
                <p className={styles.experienceText}>Suoritin työharjoittelun fullstack-kehittäjänä yrityksessä,
                    jossa toimin ainoana web-kehittäjänä. Vastasin itsenäisesti erilaisista kehitystehtävistä ilman teknistä tukea,
                    ja hyödynsin laajasti aiempaa osaamistani. Työskentelin sekä frontendin että backendin parissa.
                    Harjoittelu oli käytännönläheinen ja antoi vastuuta heti alusta alkaen.
                    Tehtäviini kuului muun muassa suurten datamäärien (jopa 50 000 datapistettä) sisältävän graafikomponentin optimointi,
                    verkkosivun rikkinäisten animaatioiden korjaaminen sekä merkittävien muutosten tekeminen C# ASP.NET -taustajärjestelmään.
                    Harjoittelu kehitti erityisesti itsenäistä ongelmanratkaisukykyä ja käytännön valmiuksia työskennellä tuotantoympäristössä.
                </p>
            </div>

            <ArrowDown className={styles.arrowDown} />
            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <p className={styles.experienceTitle}>DeFination Labs FZCO (1 v)</p>
                    <Work className={styles.experienceTitleIcon} />
                </div>
                <p className={styles.experienceText}>Olen toiminut freelancerina fullstack-web- ja mobiilikehittäjänä,
                    tehden sekä omia että tiimiprojekteja etätyönä.
                    Vastasin käyttöliittymien suunnittelusta ja toteutuksesta sekä niiden backend-ratkaisuista,
                    joko itsenäisesti tai osana tiimiä.
                    Useissa projekteissa toimin täysin itsenäisesti alusta loppuun:
                    valitsin ja pystytin kehitysympäristön sekä rakensin tuotteen valmiiksi toimivaksi pilvipohjaiseksi palveluksi.
                    Kokemusta kertyi kokonaisvaltaisesta kehitystyöstä, jossa yhdistyvät tekninen osaaminen ja projektin hallinta.
                </p>
            </div>
            <ArrowDown className={styles.arrowDown} />

            <div className={styles.experienceContainer}>
                <div className={styles.experienceTitleContainer}>
                    <p className={styles.experienceTitle}>Hakatemia (2 kk)</p>
                    <School className={styles.experienceTitleIcon} />
                </div>
                <p className={styles.experienceText}>Osallistun tällä hetkellä verkkokoulutukseen,
                    jossa perehdytään eettiseen hakkerointiin ja tietoturvaan käytännön kautta. Koulutus suoritetaan omaan tahtiin,
                    ja sen aikana harjoitellaan aidosti tietoturva-aukkojen löytämistä ja hyödyntämistä palvelimilta ja käyttöliittymistä.
                    Koulutus tarjoaa arvokasta kokemusta tietoturvatestauksesta sekä syventää ymmärrystä siitä,
                    miten järjestelmien turvallisuutta voidaan kehittää vastuullisin ja tehokkain menetelmin.
                </p>
            </div>
        </div>
    )
}

export default Experience