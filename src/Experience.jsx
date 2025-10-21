import styles from "./Experience.module.css"
import Close from "../assets/close_icon.svg?react"
import { useState } from "react"

const Experience = () => {

    const ExperienceInfoModal = ({ logo, companyName, positionName, location, description }) => {
        const [isOpened, setIsOpened] = useState(false)

        return (
            <div>
                <button className={styles.openExperienceInfoButton} onClick={() => {
                    document.body.style.overflow = 'hidden';
                    setIsOpened(true)
                }}>
                    More info
                </button>
                {isOpened ?
                    <div className={styles.modalMain}>
                        <div className={styles.modalContent}>
                            <div className={styles.closeIconContainer}>
                                <Close className={styles.closeIcon} onClick={() => {
                                    document.body.style.overflow = '';
                                    setIsOpened(false)
                                }} />
                            </div>
                            <img src={logo} className={styles.companyLogoModal} />
                            <p className={styles.modalTitle}>Company:</p>
                            <p className={styles.modalText}>{companyName}</p>

                            <p className={styles.modalTitle}>Role:</p>
                            <p className={styles.modalText}>{positionName}</p>

                            <p className={styles.modalTitle}>Location:</p>
                            <p className={styles.modalText}>{location}</p>


                            <p className={styles.modalTitle}>General description:</p>
                            <p className={styles.modalTextScrollable}>{description}</p>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        )
    }



    return (
        <div className={styles.main}>
            <p className={styles.sectionTitle}>Education & Work experience</p>
            <div className={styles.experiencesContainer}>

                <div className={styles.experienceContainer}>
                    <div className={styles.experienceTitleContainer}>
                        <p className={styles.experienceTitleTimePeriod}>2019 (8 Months)</p>
                        <p className={styles.experienceTitle}>University of Helsinki</p>
                        <img src="/HY.png" className={styles.companyLogo} />
                    </div>
                    <ExperienceInfoModal
                        logo="/HY.png"
                        companyName="University of Helsinki"
                        positionName="Student"
                        location="Remote"
                        description="Suoritin verkossa tietojenkäsittelytieteen opintoja,
                            jotka vastaavat yliopiston ensimmäisen vuoden sisältöä.
                            Opinnoissa käytiin läpi muun muassa ohjelmoinnin perusteita,
                            algoritmeja ja tietorakenteita sekä tietojenkäsittelyn keskeisiä käsitteitä ja ongelmanratkaisua.
                            Opinnot toteutettiin omaan tahtiin verkkokurssina,
                            ja ne antoivat hyvän pohjan ymmärtää, miten ohjelmistot toimivat ja miten niitä rakennetaan."
                    />
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.experienceTitleContainer}>
                        <p className={styles.experienceTitleTimePeriod}>2020 (2.5 Months)</p>
                        <p className={styles.experienceTitle}>React Buutcamp</p>
                        <img src="/buutti.webp" className={styles.companyLogo} />
                    </div>
                    <ExperienceInfoModal
                        logo="/buutti.webp"
                        companyName="Buutti Oy"
                        positionName="Student"
                        location="Remote"
                        description="Kurssilla tutustuttiin HTML:n, CSS:n, JavaScriptin ja Reactin alkeisiin,
                            ja painopiste oli erityisesti peruskäsitteiden ja työkalujen ymmärtämisessä.
                            Opin, miten verkkosivujen rakenne, ulkoasu ja perustoiminnallisuus syntyvät,
                            ja sain hyvän pohjan jatkaa opiskelua ja kehittää osaamista syvemmälle käytännön kautta."
                    />
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.experienceTitleContainer}>
                        <p className={styles.experienceTitleTimePeriod}>2021 (3.5 Months)</p>
                        <p className={styles.experienceTitle}>Buutti trainee academy</p>
                        <img src="/buutti.webp" className={styles.companyLogo} />
                    </div>
                    <ExperienceInfoModal
                        logo="/buutti.webp"
                        companyName="Buutti Oy"
                        positionName="Student"
                        location="Hybrid"
                        description="FullStack-webkehitykseen keskittyvä koulutus,
                            jossa käytiin läpi verkkosovellusten kehittämistä alusta loppuun.
                            Kurssilla tutustuttiin muun muassa JavaScriptiin,
                            TypeScriptiin, CSS:ään, SQL:ään, PostgreSQL:ään ja MongoDB:hen.
                            Opintoihin sisältyi myös käyttäjien rekisteröinnin ja kirjautumisen toteuttaminen JWT-tunnisteilla,
                            sekä testauksen ja Material UI -komponenttikirjaston käyttö.
                            Koulutus painottui käytännön harjoituksiin ja tiimityöhön,
                            ja tarjosi hyvän kokonaiskuvan siitä, miten moderneja fullstack-sovelluksia rakennetaan sekä front- että backendin näkökulmasta."
                    />
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.experienceTitleContainer}>
                        <p className={styles.experienceTitleTimePeriod}>2022 (6 Months)</p>
                        <p className={styles.experienceTitle}>Wiiste Oy</p>
                        <img src="/wiiste.png" className={styles.companyLogo} />
                    </div>
                    <ExperienceInfoModal
                        logo="/wiiste.png"
                        companyName="Wiiste Oy"
                        positionName="Trainee FullStack developer"
                        location="Hybrid"
                        description="Suoritin työharjoittelun fullstack-kehittäjänä yrityksessä,
                            jossa toimin ainoana web-kehittäjänä. Vastasin itsenäisesti erilaisista kehitystehtävistä ilman teknistä tukea,
                            ja hyödynsin laajasti aiempaa osaamistani. Työskentelin sekä frontendin että backendin parissa.
                            Harjoittelu oli käytännönläheinen ja antoi vastuuta heti alusta alkaen.
                            Tehtäviini kuului muun muassa suurten datamäärien (jopa 50 000 datapistettä) sisältävän graafikomponentin optimointi,
                            verkkosivun rikkinäisten animaatioiden korjaaminen sekä merkittävien muutosten tekeminen C# ASP.NET -taustajärjestelmään.
                            Harjoittelu kehitti erityisesti itsenäistä ongelmanratkaisukykyä ja käytännön valmiuksia työskennellä tuotantoympäristössä."
                    />
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.experienceTitleContainer}>
                        <p className={styles.experienceTitleTimePeriod}>2024 (1 Year)</p>
                        <p className={styles.experienceTitle}>DeFination Labs FZCO</p>
                        <img src="/definationlabs.jpg" className={styles.companyLogo} />
                    </div>
                    <ExperienceInfoModal
                        logo="/definationlabs.jpg"
                        companyName="Defination Labs FZCO"
                        positionName="Mid-level FullStack developer"
                        location="Remote"
                        description="Olen toiminut freelancerina fullstack-web- ja mobiilikehittäjänä,
                            tehden sekä omia että tiimiprojekteja etätyönä.
                            Vastasin käyttöliittymien suunnittelusta ja toteutuksesta sekä niiden backend-ratkaisuista,
                            joko itsenäisesti tai osana tiimiä.
                            Useissa projekteissa toimin täysin itsenäisesti alusta loppuun:
                            valitsin ja pystytin kehitysympäristön sekä rakensin tuotteen valmiiksi toimivaksi pilvipohjaiseksi palveluksi.
                            Kokemusta kertyi kokonaisvaltaisesta kehitystyöstä, jossa yhdistyvät tekninen osaaminen ja projektin hallinta."
                    />
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.experienceTitleContainer}>
                        <p className={styles.experienceTitleTimePeriod}>2025 (2 Months)</p>
                        <p className={styles.experienceTitle}>Hakatemia</p>
                        <img src="/hakatemia.jpg" className={styles.companyLogo} />
                    </div>
                    <ExperienceInfoModal
                        logo="/hakatemia.jpg"
                        companyName="Hakatemia Oy"
                        positionName="Cyber security student"
                        location="Remote"
                        description="Osallistun tällä hetkellä verkkokoulutukseen,
                            jossa perehdytään eettiseen hakkerointiin ja tietoturvaan käytännön kautta. Koulutus suoritetaan omaan tahtiin,
                            ja sen aikana harjoitellaan aidosti tietoturva-aukkojen löytämistä ja hyödyntämistä palvelimilta ja käyttöliittymistä.
                            Koulutus tarjoaa arvokasta kokemusta tietoturvatestauksesta sekä syventää ymmärrystä siitä,
                            miten järjestelmien turvallisuutta voidaan kehittää vastuullisin ja tehokkain menetelmin."
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience