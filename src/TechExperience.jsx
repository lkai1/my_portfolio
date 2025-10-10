import styles from "./TechExperience.module.css"
import Circle from "../assets/circle.svg?react"

const TechExperience = () => {

    const getTechExperiencePoints = (experienceAmount) => {
        return (
            <div className={styles.techExperiencePoints}>
                <Circle className={experienceAmount > 0 ? styles.circleIconColor : styles.circleIcon} />
                <Circle className={experienceAmount > 1 ? styles.circleIconColor : styles.circleIcon} />
                <Circle className={experienceAmount > 2 ? styles.circleIconColor : styles.circleIcon} />
                <Circle className={experienceAmount > 3 ? styles.circleIconColor : styles.circleIcon} />
            </div>
        )
    }

    const getTechExperience = (experienceAmount, experienceTime, techLogo, techName) => {
        return (
            <div className={styles.technologyContainer}>
                {getTechExperiencePoints(experienceAmount)}
                <div className={styles.techNameAndLogoContainer}>
                    <img src={techLogo} className={styles.technologyLogo} />
                    <p className={styles.technologyName}>{techName}</p>
                </div>
                <p className={styles.experienceTime}>({experienceTime} vuotta)</p>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <p className={styles.sectionTitle}>Teknologiaosaaminen</p>
            <div className={styles.technologiesContainer}>
                {getTechExperience(4, 5, "/javascript.png", "JavaScript")}
                {getTechExperience(4, 5, "/nodejs.png", "NodeJS")}
                {getTechExperience(4, 5, "/css.png", "CSS")}
                {getTechExperience(4, 5, "/react.png", "React")}
                {getTechExperience(4, 4, "/postgresql.png", "PostgreSQL")}
                {getTechExperience(4, 2, "/typescript.png", "TypeScript")}
                {getTechExperience(4, 1, "/mongodb.png", "MongoDB")}
                {getTechExperience(2, 1, "/react.png", "React Native")}
                {getTechExperience(2, 0.9, "/csharp.png", "C#")}
                {getTechExperience(2, 0.9, "/dotnet.png", ".NET")}
                {getTechExperience(2, 0.7, "/sql.png", "SQL")}
                {getTechExperience(3, 0.5, "/nextjs.png", "NextJS")}
                {getTechExperience(2, 0.3, "/vitejs.png", "ViteJS")}
                {getTechExperience(1, 0.1, "/aws.png", "AWS")}
            </div>
        </div>
    )
}

export default TechExperience