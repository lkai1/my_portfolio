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
                        description="I completed online studies in computer science that correspond to the content of the first year at university.
                            The studies covered, among other things, the basics of programming, algorithms and data structures, as well as key concepts in computer science and problem-solving.
                            The courses were self-paced online."
                    />
                </div>

                <div className={styles.experienceContainer}>
                    <div className={styles.experienceTitleContainer}>
                        <p className={styles.experienceTitleTimePeriod}>2020 (2.5 Months)</p>
                        <p className={styles.experienceTitle}>React BuutCamp</p>
                        <img src="/buutti.webp" className={styles.companyLogo} />
                    </div>
                    <ExperienceInfoModal
                        logo="/buutti.webp"
                        companyName="Buutti Oy"
                        positionName="Student"
                        location="Remote"
                        description="The course introduced the basics of HTML, CSS, JavaScript, and React, with a particular focus on understanding fundamental concepts and tools."
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
                        location="Hybrid/Tampere"
                        description="A training program focused on FullStack web development, covering the creation of web applications from start to finish.
                            The course included exposure to JavaScript, TypeScript, CSS, SQL, PostgreSQL, and MongoDB.
                            The studies also involved implementing user registration and login using JWT tokens, as well as testing with Jest and Cypress and using the Material UI component library."
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
                        location="Hybrid/Tampere"
                        description="I was independently responsible for various development tasks without technical support.
                        I worked on both the frontend and backend. My tasks included, among other things, 
                        optimizing a graphical component handling large datasets (up to 50,000 data points at the same time), 
                        fixing broken animations on the website, and implementing changes and fixes to a backend system. 
                        If I remember correctly, I was offered a part-time job with very few hours after the Trainee period. 
                        I made a mistake and refused, so I could be free to find a full-time job but never did."
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
                        description="I worked as a freelancer as a FullStack web and mobile developer, 
                        completing both solo and team projects remotely. 
                        I was responsible for designing and implementing user interfaces as well as their backend solutions, 
                        either independently or as part of a team. In several projects, I managed the entire process independently,
                        selecting and setting up the development environment 
                        and building the product into a fully functional cloud-based production ready service. 
                        This was not a fulltime job, sometimes I worked 16 hours a day and sometimes there was no work."
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
                        description="I am currently participating in an online training program focused on ethical hacking and cybersecurity through practical exercises.
                            The course is self-paced, and it provides hands-on practice in identifying and exploiting security vulnerabilities in servers and user interfaces.
                            The training offers valuable experience in security testing and deepens understanding of how system security can be improved."
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience