import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import './App.css';
import NavbarComponent from './components/navbar/navbar';
import Header from './components/header/header';
import pic from './components/images/header.png'
import Experience from './components/experience/exp';
import Estimate from './components/estimate/estimate';
import Work from './components/work/work';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      {/* <img src={Image} alt="as"></img> */}
      <Image src={pic} alt="image" fluid />
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
