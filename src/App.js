//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import './components/Teste.js'
import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact.js';
import Explore from './components/pages/Explore.js';
import Container from './components/layout/Container.js'
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js'
//import MyCarousel from './components/layout/MyCarousel.js';
//<Route path="*" element={<NotFound />} />

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>  
      <Footer/>
    </Router>
  );
}

export default App;
