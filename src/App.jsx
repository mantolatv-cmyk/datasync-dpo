import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Services from './components/Services';
import Technology from './components/Technology';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import FAQ from './components/FAQ';


function App() {
  return (
    <div className="app-wrapper">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Services />
        <Technology />
        <About />
        <FAQ />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App;
