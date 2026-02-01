import Hero from '../components/Hero.jsx';
import Timeline from '../components/Timeline.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Philosophy from '../components/Philosophy.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="relative">
      {/* Smooth scroll container */}
      <div className="relative">
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <Philosophy />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
