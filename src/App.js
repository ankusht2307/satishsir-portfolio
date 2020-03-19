import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import './App.css';
import NavbarComponent from './components/navbar/navbar';
import Header from './components/header/header';
import pic from './components/images/header.png'
import Experience from './components/experience/exp';

function App() {
  return (
    <div className="App">
      {/* <img src={Image} alt="as"></img> */}
      <Image src={pic} alt="image" fluid/>
      <NavbarComponent />
      <Header />
      <Experience />
    </div>
  );
}

export default App;
