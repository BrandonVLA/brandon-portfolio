import './App.css'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'  
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    /* asegurar min-height y ancho completo para la app */
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
