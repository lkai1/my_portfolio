import styles from "./App.module.css"
import About from "./About"
import Experience from "./Experience"
import ProjectsList from "./ProjectsList"
import Footer from "./Footer"

const App = () => {

  return (
    <div className={styles.main}>
      <div className={styles.aboutAndExperienceContainer}>
        <About />
        <Experience />
      </div>
      <ProjectsList />
      <Footer />
    </div>
  )
}

export default App
