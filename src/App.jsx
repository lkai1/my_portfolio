import styles from "./App.module.css"
import About from "./About"
import Experience from "./Experience"

const App = () => {

  return (
    <div className={styles.main}>
      <About />
      <Experience />
    </div>
  )
}

export default App
