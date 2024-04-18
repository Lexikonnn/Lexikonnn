import Header from './modules/Header'
import Home from './modules/Home';
import About from './modules/About';
import Resume from './modules/Resume';
import Contact from './modules/Contact';
import PersonalSkills from './modules/PersonalSkills';
import Footer from './modules/Footer';
import './styles/App.css'
import { useRef } from 'react';



function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);


  const handleScrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToResume = () => {
    resumeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  //preserveAspectRatio='xMidYMax meet'
  return (
    <div className="App">

      <div className='section-parent' ref={homeRef}>
        <div className='section-mask'>
          <div className='section' >
            <Home scrollToResume={handleScrollToResume} scrollToContact={handleScrollToContact} />
          </div>
        </div>
      </div>
      <Header scrollToHome={handleScrollToHome} scrollToAbout={handleScrollToAbout} scrollToResume={handleScrollToResume} />
      <div className='section-content' ref={aboutRef}>
        <About />
      </div>
      <div className='section-content'>
        <PersonalSkills />
      </div>
      <div id="resume" className='section-content' ref={resumeRef}>
        <Resume />
      </div>
      <div className='section-content' ref={contactRef}>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
