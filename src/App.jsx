import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Services from './components/Services';
import Technology from './components/Technology';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Services />
        <Technology />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
