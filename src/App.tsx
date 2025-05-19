import Hero from './components/Hero';
import Introduction from './components/Introduction';
import DangerSection from './components/DangerSection';
import WhyPeopleFall from './components/WhyPeopleFall';
import Solution from './components/Solution';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Introduction />
      <DangerSection />
      <WhyPeopleFall />
      <Solution />
      <Footer />
    </div>
  );
}

export default App;
