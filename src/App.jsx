import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Skills, Works, StarsCanvas} from './components';





const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#000F26]'>
        <div className='bg-hero-pattern bg-contain bg-repeat bg-center'>
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>
          <Skills/>
          <Works/>
          <Contact/>
        </div>
        <div className='relative z-0'>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
