import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home({ playClick }) {
  return (
    <>
      <Hero playClick={playClick} />
      <About playClick={playClick} />
      <Projects playClick={playClick} />
      <Experience playClick={playClick} />
      <Contact playClick={playClick} />
      <Footer />
    </>
  )
}
