import Hero from './components/Hero'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'  
import './App.css'

function App() {
  

  return (
    /* asegurar min-height y ancho completo para la app */
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App;
