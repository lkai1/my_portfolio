import styles from "./Courses.module.css"

const Courses = () => {

    return (
        <div className={styles.main}>
            <p className={styles.sectionTitle}>Courses & Certificates</p>
            <div className={styles.courses}>
                <div className={styles.courseContainer}>
                    <p className={styles.courseName}>React BuutCamp</p>
                    <img src="/buutti_frontend_certificate.png" className={styles.courseImage} />
                </div>
                <div className={styles.courseContainer}>
                    <p className={styles.courseName}>AWS Certified Cloud Practitioner: Exam Prep Plan</p>
                    <img src="/aws_exam_prep_plan_certified_cloud_practitioner_certification.png" className={styles.courseImage} />
                </div>
                <div className={styles.courseContainer}>
                    <p className={styles.courseName}>AWS Developer Associate Certification Prep</p>
                    <img src="/aws_developer_associate.png" className={styles.courseImage} />
                </div>
            </div>
        </div>
    )
}

export default Courses
