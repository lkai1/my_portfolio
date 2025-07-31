import styles from "./ProjectsList.module.css"

const ProjectsList = () => {
    return (
        <div className={styles.main}>
            <div className={styles.projectContainer}>
                <p className={styles.projectName}>Bonusfun</p>
                <p className={styles.projectDescription}>Website for casino reflinks</p>
                <div className={styles.technologyContainer}>
                    <img src="/javascript.png" className={styles.technologyLogo} />
                    <p className={styles.technologyName}>Javascript</p>
                </div>
                <div className={styles.technologyContainer}>
                    <img src="/typescript.png" className={styles.technologyLogo} />
                    <p className={styles.technologyName}>Typescript</p>
                </div>
                <div className={styles.technologyContainer}>
                    <img src="/react.png" className={styles.technologyLogo} />
                    <p className={styles.technologyName}>React</p>
                </div>
            </div>
            <div className={styles.projectContainer}>
                <p className={styles.projectName}>Bonusfun</p>
                <p className={styles.projectDescription}>Website for casino reflinks</p>
                <div className={styles.technologyContainer}>
                    <img src="/javascript.png" className={styles.technologyLogo} />
                    <p className={styles.technologyName}>Javascript</p>
                </div>
                <div className={styles.technologyContainer}>
                    <img src="/typescript.png" className={styles.technologyLogo} />
                    <p className={styles.technologyName}>Typescript</p>
                </div>
                <div className={styles.technologyContainer}>
                    <img src="/react.png" className={styles.technologyLogo} />
                    <p className={styles.technologyName}>React</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList