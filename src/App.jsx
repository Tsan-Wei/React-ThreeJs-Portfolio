import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Skills, Works, StarsCanvas} from './components';





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
        </div>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
