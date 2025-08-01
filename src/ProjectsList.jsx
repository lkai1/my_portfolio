import styles from "./ProjectsList.module.css"

const ProjectsList = () => {
    return (
        <div className={styles.main}>
            <p className={styles.sectionTitle}>Projekteja</p>
            <div className={styles.projects}>

                <div className={styles.projectContainer}>
                    <a className={styles.projectNameLink} href="https://www.flierchat.com" target="_blank" rel="noopener noreferrer">Flierchat</a>
                    <img src="/flierchat.png" className={styles.projectImage} />
                    <p className={styles.projectDescription}>Realtime chat web app</p>
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
                    <img src="/bonus_fun.png" className={styles.projectImage} />
                    <p className={styles.projectDescription}>Casino reflink web app</p>
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
                    <img src="/wallet_track.png" className={styles.projectImage} />
                    <p className={styles.projectDescription}>Telegram crypto wallet tracker bot</p>
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

                <div className={styles.projectContainer}>
                    <a className={styles.projectNameLink} href="https://lkai1.github.io/meme_coin_template" target="_blank" rel="noopener noreferrer">Kenny</a>
                    <img src="/kenny.png" className={styles.projectImage} />
                    <p className={styles.projectDescription}>Crypto memecoin website</p>
                    <div className={styles.technologiesContainer}>
                        <div className={styles.technologyContainer}>
                            <img src="/javascript.png" className={styles.technologyLogo} />
                            <p className={styles.technologyName}>Javascript</p>
                        </div>
                        <div className={styles.technologyContainer}>
                            <img src="/react.png" className={styles.technologyLogo} />
                            <p className={styles.technologyName}>React</p>
                        </div>
                        <div className={styles.technologyContainer}>
                            <img src="/framer_motion.png" className={styles.technologyLogo} />
                            <p className={styles.technologyName}>Framer Motion</p>
                        </div>
                        <div className={styles.technologyContainer}>
                            <img src="/css.png" className={styles.technologyLogo} />
                            <p className={styles.technologyName}>CSS</p>
                        </div>
                        <div className={styles.technologyContainer}>
                            <img src="/nextjs.png" className={styles.technologyLogo} />
                            <p className={styles.technologyName}>NextJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList