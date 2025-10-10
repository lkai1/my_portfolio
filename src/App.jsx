import styles from "./App.module.css"
import About from "./About"
import Experience from "./Experience"
import ProjectsList from "./ProjectsList"
import Footer from "./Footer"
import TechExperience from "./TechExperience"

const App = () => {

  return (
    <div className={styles.main}>
      <div className={styles.aboutAndExperienceContainer}>
        <About />
        <Experience />
      </div>
      <TechExperience />
      <ProjectsList />
      <Footer />
    </div>
  )
}

export default App
