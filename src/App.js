
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Form from './state-tutorial';

function App() {

  

  return (
    <div className="m-auto">
      <BrowserRouter>
        <Link to='#about'>
        
        </Link>
      
        <Hero />
        <About />
        {/* <Form /> */}
        <Projects />
        <Skills />
        <ContactUs />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
