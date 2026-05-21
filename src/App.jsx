import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ArtMusic from './components/ArtMusic'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import { useSound, playTronIntro } from './hooks/useSound'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const { playClick, playWhoosh, playDing } = useSound(soundEnabled)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-main text-primary">
      <Cursor />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playClick={playClick}
        playDing={playDing}
      />
      <Hero playClick={playClick} />
      <About playClick={playClick} />
      <Skills playClick={playClick} />
      <Projects playClick={playClick} />
      <Experience playClick={playClick} />
      <ArtMusic playClick={playClick} />
      <Contact playClick={playClick} />
      <Footer />
    </div>
  )
}
