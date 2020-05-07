import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavbarComponent from './components/navbar/navbar';
import Header from './components/header/header';
import Experience from './components/experience/exp';
import Estimate from './components/estimate/estimate';
import Work from './components/work/work';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Header />
      <Experience />
      <Estimate />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
