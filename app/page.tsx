import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Courses from '../components/Courses';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      <NavBar />
      <Hero />
  <Courses />
  <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
