import styles from "./Courses.module.css"

const Courses = () => {

    return (
        <div className={styles.main}>
            <p className={styles.sectionTitle}>Courses & Certificates</p>
            <div className={styles.courses}>
                <div className={styles.courseContainer}>
                    <p className={styles.courseName}>AWS Cloud Practitioner Essentials</p>
                    <img src="/cloud_practitioner.png" className={styles.courseImage} />
                </div>
            </div>
        </div>
    )
}

export default Courses
