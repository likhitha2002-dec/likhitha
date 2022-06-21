import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Clients from './components/Clients';
import Prices from './components/Prices';
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu1 from "./pages/Menu1";
import About1 from "./pages/About1";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return ( 
    <div className='App'>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu1} />
          <Route path="/about" exact component={About1} />
          <Route path="/contact" exact component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
