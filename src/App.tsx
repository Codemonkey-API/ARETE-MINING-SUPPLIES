import NavBar from './components/NavBar';
import HeroVideo from './components/HeroVideo';
import Products from './components/Products';
import AboutSection from './components/AboutSection';
import ContactSection from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <HeroVideo />
      <Products />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}



export default App;