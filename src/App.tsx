import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSlider from './components/ServicesSlider';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MissionStatement from './pages/MissionStatement';
import Objectives from './pages/Objectives';
import HSSE from './pages/HSSE';
import QualityAssurance from './pages/QualityAssurance';
import ContactUs from './pages/ContactUs';
import OffshoreMarine from './pages/OffshoreMarine';
import FireFighting from './pages/FireFighting';
import CranesPage from './pages/Cranes';
import MechanicalPage from './pages/Mechanical';
import SpecialJobs from './pages/SpecialJobs';
import CivilPage from './pages/Civil';
import ElectricalInstrumentation from './pages/ElectricalInstrumentation';
import CoatingInsulation from './pages/CoatingInsulation';
import CommissioningPage from './pages/Commissioning';
import FabricationConstruction from './pages/FabricationConstruction';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSlider />
      <Services />
      <About />
      <Projects />
      <Partners />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mission-statement" element={<MissionStatement />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/hsse" element={<HSSE />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/offshore-marine" element={<OffshoreMarine />} />
        <Route path="/fire-fighting" element={<FireFighting />} />
        <Route path="/cranes" element={<CranesPage />} />
        <Route path="/mechanical" element={<MechanicalPage />} />
        <Route path="/special-jobs" element={<SpecialJobs />} />
        <Route path="/civil" element={<CivilPage />} />
        <Route path="/electrical-instrumentation" element={<ElectricalInstrumentation />} />
        <Route path="/coating-insulation" element={<CoatingInsulation />} />
        <Route path="/commissioning" element={<CommissioningPage />} />
        <Route path="/fabrication-construction" element={<FabricationConstruction />} />
      </Routes>
    </div>
  );
}

export default App;
