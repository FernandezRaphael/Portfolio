import './index.scss'
import styled from 'styled-components'
import Hero from './assets/components/sections/Hero'
import Header from './assets/components/global/Header'
import Projects from './assets/components/sections/Porjects'
import About from './assets/components/sections/About'
import Footer from './assets/components/global/Footer'

const StyledApp = styled.div`
  width: 100%;
`

function Home() {

  return (
    <StyledApp>
      <Header />
      <Hero />
      <section id="Projects">
        <Projects />
      </section>
      <section id="About">
        <About />
      </section>
      <Footer />
    </StyledApp>
  )
}

export default Home
