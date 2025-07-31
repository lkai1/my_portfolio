import styles from "./App.module.css"
import About from "./About"
import Experience from "./Experience"
import ProjectsCarousel from "./ProjectsCarousel"
import ProjectsList from "./ProjectsList"
import Footer from "./Footer"

const App = () => {

  return (
    <div className={styles.main}>
      <About />
      <Experience />
      <ProjectsCarousel />
      <ProjectsList />
      <Footer />
    </div>
  )
}

export default App
