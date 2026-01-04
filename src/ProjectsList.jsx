import styles from "./ProjectsList.module.css"
import Eye from "../assets/eye_icon.svg?react"
import LeftArrow from "../assets/leftarrow_icon.svg?react"
import RightArrow from "../assets/rightarrow_icon.svg?react"
import { useState } from "react"
import Close from "../assets/close_icon.svg?react"

const ProjectsList = () => {

    const ProjectImages = ({ images }) => {

        const [isOpen, setIsOpen] = useState(false)
        const [currentImage, setCurrentImage] = useState(images[0])

        const changeImage = (side) => {
            if (side === "left") {
                currentImage === images[0]
                    ? setCurrentImage(images[images.length - 1])
                    : setCurrentImage(images[images.indexOf(currentImage) - 1])
            } else {
                currentImage === images[images.length - 1]
                    ? setCurrentImage(images[0])
                    : setCurrentImage(images[images.indexOf(currentImage) + 1])
            }
        }

        return (
            <div className={styles.projectImagesMain}>
                <img src={images[0]} className={styles.projectMainImage} />
                <button className={styles.openImagesButton} onClick={() => {
                    setIsOpen(true)
                    document.body.style.overflow = 'hidden';
                }}>
                    <Eye className={styles.eyeIcon} />
                    <p className={styles.openImagesButtonText}>more images</p>
                </button>
                {isOpen ?
                    <div className={styles.modalMain}>
                        <Close className={styles.closeIcon} onClick={() => {
                            document.body.style.overflow = '';
                            setIsOpen(false)
                        }} />
                        <div className={styles.modalContent}>
                            <LeftArrow className={styles.arrowLeft} onClick={() => changeImage("left")} />
                            <img src={currentImage} className={styles.projectImageLarge} />
                            <RightArrow className={styles.arrowRight} onClick={() => changeImage("right")} />
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
            <p className={styles.sectionTitle}>Projects</p>
            <div className={styles.projects}>
                <div className={styles.projectContainer}>
                    <p className={styles.projectName}>taskuraha.net</p>
                    <img src="/taskuraha.png" className={styles.projectMainImage} />
                    <p className={styles.projectDescription}>More information when published.</p>
                </div>
            </div>

            <div className={styles.hobbyProjectsContainer}>
                <p className={styles.sectionTitle}>Hobby Projects</p>
                <div className={styles.projects}>

                    <div className={styles.projectContainer}>
                        <a className={styles.projectNameLink} href="https://www.flierchat.com" target="_blank" rel="noopener noreferrer">Flierchat</a>
                        <img src="/flierchat.png" className={styles.projectMainImage} />
                        <p className={styles.projectDescription}>Realtime chat web application</p>
                        <p className={styles.technologiesTitle}>Main Tech Stack:</p>
                        <div className={styles.technologiesContainer}>
                            <div className={styles.technologyContainer}>
                                <img src="/typescript.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>Typescript</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/react.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>React</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/sequelize.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>Sequelize</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/nodejs.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>NodeJS</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/postgresql.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>PostgreSQL</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/css.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>CSS</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/vitejs.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>ViteJS</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/react_router.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>React Router</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/socketio.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>Socket.IO</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/expressjs.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>ExpressJS</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.projectContainer}>
                        <a className={styles.projectNameLink} href="https://bonusfun-production.up.railway.app/fi" target="_blank" rel="noopener noreferrer">Bonusfun</a>
                        <ProjectImages images={[
                            "/bonusfun_front.png",
                            "/bonusfun_adminlogin.png",
                            "/bonusfun_newcard.png",
                            "/bonusfun_updatecard.png"
                        ]} />
                        <p className={styles.projectDescription}>Casino reflink web application</p>
                        <p className={styles.technologiesTitle}>Main Tech Stack:</p>
                        <div className={styles.technologiesContainer}>
                            <div className={styles.technologyContainer}>
                                <img src="/javascript.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>Javascript</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/nextjs.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>NextJS</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/react.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>React</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/postgresql.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>PostgreSQL</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/react_router.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>React Router</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/nodejs.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>NodeJS</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/expressjs.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>ExpressJS</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/sequelize.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>Sequelize</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/css.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.projectContainer}>
                        <p className={styles.projectName}>Wallet Track</p>
                        <ProjectImages images={[
                            "/wallettrack.png",
                            "/wallettrack2.png"
                        ]} />
                        <p className={styles.projectDescription}>Cryptowallet tracker bot for telegram</p>
                        <p className={styles.technologiesTitle}>Main Tech Stack:</p>
                        <div className={styles.technologiesContainer}>
                            <div className={styles.technologyContainer}>
                                <img src="/javascript.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>Javascript</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/expressjs.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>ExpressJS</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/grammy.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>grammY</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/postgresql.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>PostgreSQL</p>
                            </div>
                            <div className={styles.technologyContainer}>
                                <img src="/sequelize.png" className={styles.technologyLogo} />
                                <p className={styles.technologyName}>Sequelize</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
