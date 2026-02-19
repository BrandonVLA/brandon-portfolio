import './App.css'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'  
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useEffect } from 'react'


function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light'); //light por defecto


  //Cuando se va a cambiar el tema
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }
  return (
    /* asegurar min-height y ancho completo para la app */
    <div className="min-h-screen w-full">
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
