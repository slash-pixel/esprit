import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-gray-900 selection:bg-[#C5A059] selection:text-[#0F2818]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}