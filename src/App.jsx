import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App
