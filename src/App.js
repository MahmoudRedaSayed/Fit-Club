import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/plans';
import Programs from './components/Programs/programs';
import Reasons from './components/Reasons/reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
