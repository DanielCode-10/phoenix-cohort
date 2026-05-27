import './App.css';
import Hero from './components/Hero';
import Planets from './components/Planets';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Planets />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;