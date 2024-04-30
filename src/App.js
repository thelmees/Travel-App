import React from 'react';
import './App.css';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';


function App() {

  return (
    <div className="App">

    
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

      </Router>


    </div>
  );
}

export default App;  