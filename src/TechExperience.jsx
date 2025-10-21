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
                <Circle className={experienceAmount > 4 ? styles.circleIconColor : styles.circleIcon} />
            </div>
        )
    }

    const getTechExperience = (experienceAmount, experienceTime, techLogo, techName, timeText) => {
        return (
            <div className={styles.technologyContainer}>

                <div className={styles.techNameAndLogoContainer}>
                    <img src={techLogo} className={styles.technologyLogo} />
                    <p className={styles.technologyName}>{techName}</p>
                </div>
                {getTechExperiencePoints(experienceAmount)}
                <p className={styles.experienceTime}>({experienceTime} {timeText})</p>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <p className={styles.sectionTitle}>Tech Skills</p>
            <div className={styles.technologiesContainer}>
                {getTechExperience(5, 5, "/javascript.png", "JavaScript", "years")}
                {getTechExperience(5, 5, "/nodejs.png", "NodeJS", "years")}
                {getTechExperience(5, 5, "/css.png", "CSS", "years")}
                {getTechExperience(5, 5, "/react.png", "React", "years")}
                {getTechExperience(5, 4, "/postgresql.png", "PostgreSQL", "years")}
                {getTechExperience(5, 2, "/typescript.png", "TypeScript", "years")}
                {getTechExperience(5, 1, "/mongodb.png", "MongoDB", "year")}
                {getTechExperience(3, 1, "/react.png", "React Native", "year")}
                {getTechExperience(3, 10, "/csharp.png", "C#", "months")}
                {getTechExperience(3, 10, "/dotnet.png", ".NET", "months")}
                {getTechExperience(3, 7, "/sql.png", "SQL", "months")}
                {getTechExperience(3, 5, "/nextjs.png", "NextJS", "months")}
                {getTechExperience(3, 3, "/vitejs.png", "ViteJS", "months")}
                {getTechExperience(1, 1, "/aws.png", "AWS", "month")}
            </div>
        </div>
    )
}

export default TechExperience